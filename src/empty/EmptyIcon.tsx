﻿/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPublicPropTypes, PropType } from 'vue';
import { computed, defineComponent } from 'vue';
import { NIcon } from 'naive-ui';

const _props = {
  size: {
    type: Number as PropType<number>,
    default: 64
  }
} as const;

export type EmptyIconProps = ExtractPublicPropTypes<typeof _props>;

export default defineComponent({
  name: 'XNEmptyIcon',

  components: {
    NIcon
  },

  props: _props,

  setup(props, { attrs, expose }) {
    const iconStyles = computed(() => {
      const ml1 = `margin-left: ${(props.size - 40) / 2}px`;
      const ml2 = `margin-left: calc(-0.5 * (${props.size}px - var(--n-icon-size)))`;
      return [ml1, ml2].join('; ');
    });

    expose({});

    return () => (
      <NIcon {...attrs} size={props.size} style={iconStyles.value}>
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
    );
  }
});
