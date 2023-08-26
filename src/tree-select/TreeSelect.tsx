import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    TreeSelectOption as NTreeSelectOption,
    TreeSelectInst as NTreeSelectInst,
    TreeSelectRenderLabel as NTreeSelectRenderLabel,
    TreeSelectRenderPrefix as NTreeSelectRenderPrefix,
    TreeSelectRenderSuffix as NTreeSelectRenderSuffix,
    TreeSelectRenderTag as NTreeSelectRenderTag
} from 'naive-ui';
import type { RenderSwitcherIcon as NTreeSelectRenderSwitcherIcon } from 'naive-ui/es/tree/src/interface';
import { defineComponent, ref, computed } from 'vue';
import { NTreeSelect, treeSelectProps as defaultNTreeSelectProps } from 'naive-ui';

import { mergeVSlots } from '../_utils/v-slot';
import { getRestProps } from '../_utils/internal';
import ComponentEmpty from '../empty/Empty';

export type TreeSelectOption = Omit<NTreeSelectOption, 'prefix' | 'suffix'>;
export type TreeSelectOptions = TreeSelectOption[];
export type TreeSelectRenderLabelParams = {
    option: TreeSelectOption;
    label: string;
    key?: string | number;
    checked: boolean;
    selected: boolean;
};
export type TreeSelectRenderPrefixParams = {
    option: TreeSelectOption;
    checked: boolean;
    selected: boolean;
};
export type TreeSelectRenderSuffixParams = {
    option: TreeSelectOption;
    checked: boolean;
    selected: boolean;
};
export type TreeSelectRenderSwitcherIconParams = {
    expanded: boolean;
    selected: boolean;
};
export type TreeSelectRenderTagParams = {
    option: TreeSelectOption;
    close: () => void;
};

const _props = (() => {
    const rest = getRestProps(defaultNTreeSelectProps, 'options');
    return {
        ...rest,
        options: {
            type: Array as PropType<TreeSelectOption[]>,
            default: () => []
        },
        emptyText: {
            type: String as PropType<string>
        }
    } as const;
})();

export type TreeSelectProps = ExtractPublicPropTypes<typeof _props>;
export type TreeSelectInstance = NTreeSelectInst;

export default defineComponent({
    name: 'XNTreeSelect',

    components: {
        NTreeSelect,
        XNEmpty: ComponentEmpty
    },

    props: _props,

    slots: Object as SlotsType<{
        action: NonNullable<unknown>;
        arrow: NonNullable<unknown>;
        empty: NonNullable<unknown>;
        renderLabel: TreeSelectRenderLabelParams;
        renderPrefix: TreeSelectRenderPrefixParams;
        renderSuffix: TreeSelectRenderSuffixParams;
        renderTag: TreeSelectRenderTagParams;
        renderSwitcherIcon: TreeSelectRenderSwitcherIconParams;
    }>,

    setup(props, { attrs, slots, expose }) {
        function getNOptionLabel(option: NTreeSelectOption): string {
            return (props.labelField != null ? option[props.labelField] : option.label) as string;
        }

        function getNOptionKey(option: NTreeSelectOption): string | number {
            return (props.keyField != null ? option[props.keyField] : option.key) as string | number;
        }

        const nRenderLabel = computed(() => {
            if (!slots['renderLabel']) {
                return props.renderLabel;
            }

            return ({ option, checked, selected }: Parameters<NTreeSelectRenderLabel>[0]) => {
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

            return ({ option, checked, selected }: Parameters<NTreeSelectRenderPrefix>[0]) => {
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

            return ({ option, checked, selected }: Parameters<NTreeSelectRenderSuffix>[0]) => {
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

            return ({ expanded, selected }: Parameters<NTreeSelectRenderSwitcherIcon>[0]) => {
                return slots.renderSwitcherIcon!({
                    expanded: expanded,
                    selected: selected
                });
            };
        });

        const nRenderTag = computed(() => {
            if (!slots['renderTag']) {
                return props.renderTag;
            }

            return ({ option, handleClose }: Parameters<NTreeSelectRenderTag>[0]) => {
                return slots.renderTag!({
                    option: option,
                    close: handleClose
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

        const nRef = ref<NTreeSelectInst>();
        expose({
            focus: () => nRef.value?.focus(),
            blur: () => nRef.value?.blur(),
            getCheckedData: () => nRef.value?.getCheckedData(),
            getIndeterminateData: () => nRef.value?.getIndeterminateData()
        } as TreeSelectInstance);

        return () => (
            <NTreeSelect
                ref={nRef}
                {...attrs}
                {...props}
                renderLabel={nRenderLabel.value}
                renderPrefix={nRenderPrefix.value}
                renderSuffix={nRenderSuffix.value}
                renderSwitcherIcon={nRenderSwitcherIcon.value}
                renderTag={nRenderTag.value}
                v-slots={nSlots.value}
            />
        );
    }
});
