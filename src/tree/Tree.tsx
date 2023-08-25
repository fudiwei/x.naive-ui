import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type { TreeOption as NTreeOption, TreeInst as NTreeInst } from 'naive-ui';
import { defineComponent, ref, computed } from 'vue';
import { NTree, treeProps as defaultNTreeProps } from 'naive-ui';

import { mergeVSlots } from '../_utils/vue';
import { getRestProps } from '../_utils/internal';
import ComponentEmpty from '../empty/Empty';

export type TreeOption = Omit<NTreeOption, 'prefix' | 'suffix'>;
export type TreeOptions = TreeOption[];
export type TreeRenderLabelParams = {
    option: TreeOption;
    label: string;
    key?: string | number;
    checked: boolean;
    selected: boolean;
};
export type TreeRenderPrefixParams = {
    option: TreeOption;
    checked: boolean;
    selected: boolean;
};
export type TreeRenderSuffixParams = {
    option: TreeOption;
    checked: boolean;
    selected: boolean;
};
export type TreeRenderSwitcherIconParams = {
    expanded: boolean;
    selected: boolean;
};

const _props = (() => {
    const rest = getRestProps(defaultNTreeProps, 'data');
    return {
        ...rest,
        data: {
            type: Array as PropType<TreeOption[]>,
            default: () => []
        },
        emptyText: {
            type: String as PropType<string>
        }
    } as const;
})();

export type TreeProps = ExtractPublicPropTypes<typeof _props>;
export type TreeInstance = NTreeInst;

export default defineComponent({
    name: 'XNTree',

    components: {
        NTree,
        XNEmpty: ComponentEmpty
    },

    props: _props,

    slots: Object as SlotsType<{
        empty: NonNullable<unknown>;
        renderLabel: TreeRenderLabelParams;
        renderPrefix: TreeRenderPrefixParams;
        renderSuffix: TreeRenderSuffixParams;
        renderSwitcherIcon: TreeRenderSwitcherIconParams;
    }>,

    setup(props, { attrs, slots, expose }) {
        function getNOptionLabel(option: NTreeOption): string {
            return (props.labelField != null ? option[props.labelField] : option.label) as string;
        }

        function getNOptionKey(option: NTreeOption): string | number {
            return (props.keyField != null ? option[props.keyField] : option.key) as string | number;
        }

        const nRenderLabel = computed(() => {
            if (!slots['renderLabel']) {
                return props.renderLabel;
            }

            return ({ option, checked, selected }: { option: NTreeOption; checked: boolean; selected: boolean }) => {
                return slots.renderLabel!({
                    option: option,
                    label: getNOptionLabel(option),
                    key: getNOptionKey(option),
                    checked: checked,
                    selected: selected
                });
            };
        });

        const nRenderPrefix = computed(() => {
            if (!slots['renderPrefix']) {
                return props.renderPrefix;
            }

            return ({ option, checked, selected }: { option: NTreeOption; checked: boolean; selected: boolean }) => {
                return slots.renderPrefix!({
                    option: option,
                    checked: checked,
                    selected: selected
                });
            };
        });

        const nRenderSuffix = computed(() => {
            if (!slots['renderSuffix']) {
                return props.renderSuffix;
            }

            return ({ option, checked, selected }: { option: NTreeOption; checked: boolean; selected: boolean }) => {
                return slots.renderSuffix!({
                    option: option,
                    checked: checked,
                    selected: selected
                });
            };
        });

        const nRenderSwitcherIcon = computed(() => {
            if (!slots['renderSwitcherIcon']) {
                return props.renderSwitcherIcon;
            }

            return ({ expanded, selected }: { expanded: boolean; selected: boolean }) => {
                return slots.renderSwitcherIcon!({
                    expanded: expanded,
                    selected: selected
                });
            };
        });

        const nSlots = computed(() =>
            mergeVSlots(slots, {
                empty: slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                renderPrefix: undefined,
                renderSuffix: undefined,
                renderLabel: undefined,
                renderSwitcherIcon: undefined
            })
        );

        const nRef = ref<NTreeInst>();
        expose({
            scrollTo: (options) => nRef.value?.scrollTo(options),
            getCheckedData: () => nRef.value?.getCheckedData(),
            getIndeterminateData: () => nRef.value?.getIndeterminateData()
        } as TreeInstance);

        return () => (
            <NTree
                ref={nRef}
                {...attrs}
                {...props}
                renderLabel={nRenderLabel.value}
                renderPrefix={nRenderPrefix.value}
                renderSuffix={nRenderSuffix.value}
                renderSwitcherIcon={nRenderSwitcherIcon.value}
                v-slots={nSlots.value}
            />
        );
    }
});
