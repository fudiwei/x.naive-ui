import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import { defineComponent, computed } from 'vue';
import { NEmpty, NIcon, emptyProps as defaultNEmptyProps } from 'naive-ui';

const _props = {
    ...defaultNEmptyProps,
    description: {
        type: String as PropType<string>,
        default: '暂无数据'
    }
} as const;

export type EmptyProps = ExtractPublicPropTypes<typeof _props>;

export default defineComponent({
    name: 'XNEmpty',

    components: {
        NEmpty,
        NIcon
    },

    props: _props,

    slots: Object as SlotsType<{
        default?: NonNullable<unknown>;
        extra?: NonNullable<unknown>;
    }>,

    setup(props, { attrs, slots }) {
        const nSlots = computed(() => ({
            ...slots,

            default: () => (
                <div style="font-size: 0.75rem; line-height: 1rem;">{slots['default']?.() || props.description}</div>
            ),

            icon: () => (
                <NIcon size="64" style="margin-left: -12px; margin-left: calc(-0.5 * (64px - var(--n-icon-size)));">
                    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                            <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                            <g fill-rule="nonzero" stroke="#d9d9d9">
                                <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                <path
                                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                    fill="#fafafa"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </NIcon>
            )
        }));

        return () => <NEmpty {...attrs} {...props} v-slots={nSlots.value} />;
    }
});
