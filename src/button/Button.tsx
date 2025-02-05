/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { SlotsType, ExtractPublicPropTypes } from 'vue';
import { defineComponent, computed } from 'vue';
import { NButton, buttonProps as defaultNButtonProps } from 'naive-ui';

import { flattenVNodeChildren } from '../_utils/v-node';
import { mergeVSlots } from '../_utils/v-slot';

const _props = (() => {
  const restProps = defaultNButtonProps;
  return {
    ...restProps
  } as const;
})();

export type ButtonProps = ExtractPublicPropTypes<typeof _props>;

export default defineComponent({
  name: 'XNButton',

  components: {
    NButton
  },

  props: _props,

  slots: Object as SlotsType<{
    default?: NonNullable<unknown>;
    icon?: NonNullable<unknown>;
  }>,

  setup(props, { attrs, slots, expose }) {
    expose({});

    return () => {
      const children = flattenVNodeChildren(slots.default?.());
      const mergedStyle = computed(() => {
        const temp = [attrs.style];

        if (children.length === 0 && (!!slots.icon || props.loading) && !props.text) {
          temp.push({
            '--n-width': 'var(--n-height)',
            '--n-padding': '0'
          });
        }

        return temp;
      });

      const mergedSlots = mergeVSlots(slots, {
        default: slots.default,
        icon: slots.icon
      });

      return <NButton {...attrs} {...props} style={mergedStyle.value} v-slots={mergedSlots} />;
    };
  }
});
