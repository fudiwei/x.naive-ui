import type { App } from 'vue';

import XNCascader from './cascader';
import XNDataTable from './data-table';
import XNDropdown from './dropdown';
import XNEmpty from './empty';
import XNMenu from './menu';
import XNSelect from './select';
import XNTree from './tree';

export type * from './cascader';
export type * from './data-table';
export type * from './dropdown';
export type * from './empty';
export type * from './menu';
export type * from './select';
export type * from './tree';
export * from './cascader';
export * from './data-table';
export * from './dropdown';
export * from './empty';
export * from './menu';
export * from './select';
export * from './tree';
export default {
    install: (app: App) => {
        app.use(XNCascader);
        app.use(XNDataTable);
        app.use(XNDropdown);
        app.use(XNEmpty);
        app.use(XNMenu);
        app.use(XNSelect);
        app.use(XNTree);
    }
};
