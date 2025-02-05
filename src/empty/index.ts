import type { App } from 'vue';

import ComponentEmpty from './Empty';
import ComponentEmptyIcon from './EmptyIcon';

export type { EmptyProps } from './Empty';
export type { EmptyIconProps } from './EmptyIcon';
export const XNEmpty = Object.assign(ComponentEmpty, {
  Icon: ComponentEmptyIcon,
  install: (app: App) => {
    app.component(ComponentEmpty.name!, ComponentEmpty);
    app.component(ComponentEmptyIcon.name!, ComponentEmptyIcon);
  }
});
export const XNEmptyIcon = ComponentEmptyIcon;
export default XNEmpty;
