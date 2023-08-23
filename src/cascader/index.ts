import type { App } from 'vue';

import ComponentCascader from './Cascader';

export type { CascaderProps, CascaderOption, CascaderOptions, CascaderRenderLabelParams } from './Cascader';
export const XNCascader = Object.assign(ComponentCascader, {
    install: (app: App) => {
        app.component(XNCascader.name, XNCascader);
    }
});
export default XNCascader;
