import type { App } from 'vue';

import XNCascader from './cascader';
import XNDataTable from './data-table';
import XNDropdown from './dropdown';
import XNEmpty from './empty';
import XNMenu from './menu';
import XNSelect from './select';
import XNTree from './tree';
import XNTreeSelect from './tree-select';

export type * from './cascader';
export type * from './data-table';
export type * from './dialog';
export type * from './dropdown';
export type * from './empty';
export type * from './loading-bar';
export type * from './menu';
export type * from './message';
export type * from './notification';
export type * from './select';
export type * from './tree';
export type * from './tree-select';
export * from './cascader';
export * from './data-table';
export * from './dialog';
export * from './dropdown';
export * from './empty';
export * from './loading-bar';
export * from './menu';
export * from './message';
export * from './notification';
export * from './select';
export * from './tree';
export * from './tree-select';
export default {
    install: (app: App) => {
        app.use(XNCascader);
        app.use(XNDataTable);
        app.use(XNDropdown);
        app.use(XNEmpty);
        app.use(XNMenu);
        app.use(XNSelect);
        app.use(XNTree);
        app.use(XNTreeSelect);
    }
};
