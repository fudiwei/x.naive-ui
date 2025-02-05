/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {} from 'vueuc';
import type { TreeOption as NTreeOption, TreeInst as NTreeInst } from 'naive-ui';
import type {
    RenderLabel as NTreeRenderLabel,
    RenderPrefix as NTreeRenderPrefix,
    RenderSuffix as NTreeRenderSuffix,
    RenderSwitcherIcon as NTreeRenderSwitcherIcon
} from 'naive-ui/es/tree/src/interface';
import { defineComponent, ref, computed } from 'vue';
import { NTree, treeProps as defaultNTreeProps } from 'naive-ui';

import { getVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';

export type TreeOption = {
    children?: TreeOption[];
} & Partial<Omit<NTreeOption, 'children'>>;
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
    const restProps = objectOmitter(defaultNTreeProps, 'data');
    return {
        ...restProps,
        data: {
            type: Array as PropType<TreeOption[]>,
            default: () => []
        }
    } as const;
})();

export type TreeProps = ExtractPublicPropTypes<typeof _props>;
export type TreeInstance = NTreeInst & {
    $forwardComponent: NTreeInst;
};

export default defineComponent({
    name: 'XNTree',

    components: {
        NTree
    },

    props: _props,

    slots: Object as SlotsType<{
        'empty': NonNullable<unknown>;
        'render-label': TreeRenderLabelParams;
        'render-prefix': TreeRenderPrefixParams;
        'render-suffix': TreeRenderSuffixParams;
        'render-switcher-icon': TreeRenderSwitcherIconParams;
    }>,

    setup(props, { attrs, slots, expose }) {
        function getNOptionLabel(option: NTreeOption): string {
            return (props.labelField != null ? option[props.labelField] : option.label) as string;
        }

        function getNOptionKey(option: NTreeOption): string | number {
            return (props.keyField != null ? option[props.keyField] : option.key) as string | number;
        }

        const nRef = ref<NTreeInst>();
        const nRefExposed: TreeInstance = {
            // @ts-ignore: Function overloading
            scrollTo: (...args) => nRef.value!.scrollTo(...args),
            getCheckedData: () => nRef.value!.getCheckedData(),
            getIndeterminateData: () => nRef.value!.getIndeterminateData(),
            get $forwardComponent() {
                return nRef.value!;
            }
        };
        expose(nRefExposed);

        return () => {
            const mergedRenderLabel = computed(() => {
                const slot = getVSlot(slots, 'render-label');
                if (!slot) {
                    return props.renderLabel;
                }

                return ({ option, checked, selected }: Parameters<NTreeRenderLabel>[0]) => {
                    return slot({
                        option: option,
                        label: getNOptionLabel(option),
                        key: getNOptionKey(option),
                        checked: checked,
                        selected: selected
                    });
                };
            });

            const mergedRenderPrefix = computed(() => {
                const slot = getVSlot(slots, 'render-prefix');
                if (!slot) {
                    return props.renderPrefix;
                }

                return ({ option, checked, selected }: Parameters<NTreeRenderPrefix>[0]) => {
                    return slot({
                        option: option,
                        checked: checked,
                        selected: selected
                    });
                };
            });

            const mergedRenderSuffix = computed(() => {
                const slot = getVSlot(slots, 'render-suffix');
                if (!slot) {
                    return props.renderSuffix;
                }

                return ({ option, checked, selected }: Parameters<NTreeRenderSuffix>[0]) => {
                    return slot({
                        option: option,
                        checked: checked,
                        selected: selected
                    });
                };
            });

            const mergedRenderSwitcherIcon = computed(() => {
                const slot = getVSlot(slots, 'render-switcher-icon');
                if (!slot) {
                    return props.renderSwitcherIcon;
                }

                return ({ expanded, selected }: Parameters<NTreeRenderSwitcherIcon>[0]) => {
                    return slot({
                        expanded: expanded,
                        selected: selected
                    });
                };
            });

            const mergedSlots = mergeVSlots(slots, {
                'render-prefix': undefined,
                'render-suffix': undefined,
                'render-label': undefined,
                'render-switcher-icon': undefined
            });

            return (
                <NTree
                    ref={nRef}
                    {...attrs}
                    {...props}
                    renderLabel={mergedRenderLabel.value}
                    renderPrefix={mergedRenderPrefix.value}
                    renderSuffix={mergedRenderSuffix.value}
                    renderSwitcherIcon={mergedRenderSwitcherIcon.value}
                    v-slots={mergedSlots}
                />
            );
        };
    }
});
