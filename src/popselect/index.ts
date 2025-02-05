import type { App } from 'vue';

import ComponentSelect from '../select';
import ComponentPopselect from './Popselect';

export type { PopselectProps, PopselectInstance, PopselectRenderLabelParams } from './Popselect';
export const XNPopselect = Object.assign(ComponentPopselect, {
  install: (app: App) => {
    app.use(ComponentSelect);
    app.component(ComponentPopselect.name!, ComponentPopselect);
  }
});
export default XNPopselect;
