import type { App } from 'vue';

import XNCascader from './Cascader';

export type { CascaderProps, CascaderOption, CascaderOptions, CascaderRenderLabelParams } from './Cascader';
export { XNCascader };
export default Object.assign(XNCascader, {
    install: (app: App) => {
        app.component(XNCascader.name, XNCascader);
    }
});
