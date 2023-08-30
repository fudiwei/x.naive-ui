import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import { defineComponent, computed } from 'vue';
import { NEmpty, NIcon, emptyProps as defaultNEmptyProps } from 'naive-ui';

import { mergeVSlots } from '../_utils/v-slot';
import { getRestProps } from '../_utils/internal';
import ComponentEmptyIcon from './EmptyIcon';

const _props = (() => {
    const rest = getRestProps(defaultNEmptyProps, 'description');
    return {
        ...rest,
        description: {
            type: String as PropType<string>,
            default: '暂无数据'
        }
    } as const;
})();

export type EmptyProps = ExtractPublicPropTypes<typeof _props>;

export default defineComponent({
    name: 'XNEmpty',

    components: {
        NEmpty,
        NIcon,
        XNEmptyIcon: ComponentEmptyIcon
    },

    props: _props,

    slots: Object as SlotsType<{
        default?: NonNullable<unknown>;
        extra?: NonNullable<unknown>;
        icon?: NonNullable<unknown>;
    }>,

    setup(props, { attrs, slots, expose }) {
        const nSlots = computed(() =>
            mergeVSlots(slots, {
                default: () => (
                    <div style="font-size: 0.75rem; line-height: 1rem;">
                        {slots['default']?.() || props.description}
                    </div>
                ),

                icon: slots['icon'] || (() => <ComponentEmptyIcon />)
            })
        );

        expose({});

        return () => <NEmpty {...attrs} {...props} v-slots={nSlots.value} />;
    }
});
