/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPublicPropTypes, PropType, SlotsType } from 'vue';
import { computed, defineComponent } from 'vue';
import { NEmpty, NIcon, emptyProps as defaultNEmptyProps } from 'naive-ui';

import ComponentEmptyIcon from './EmptyIcon';
import { objectOmitter } from '../_utils/internal';
import { mergeVSlots } from '../_utils/v-slot';

const _props = (() => {
  const restProps = objectOmitter(defaultNEmptyProps, 'description');
  return {
    ...restProps,
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
    expose({});

    return () => {
      const mergedSlots = computed(() =>
        mergeVSlots(slots, {
          default: () => <div style="font-size: 0.75rem; line-height: 1rem;">{slots.default?.() ?? props.description}</div>,

          icon: slots.icon || (() => <ComponentEmptyIcon />)
        })
      );

      return <NEmpty {...attrs} {...props} v-slots={mergedSlots.value} />;
    };
  }
});
