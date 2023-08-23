﻿import type { App } from 'vue';

import XNCascader from './cascader';
import XNDataTable from './data-table';
import XNDropdown from './dropdown';
import XNEmpty from './empty';
import XNSelect from './select';

export type * from './cascader';
export type * from './data-table';
export type * from './dropdown';
export type * from './empty';
export type * from './select';
export * from './cascader';
export * from './data-table';
export * from './dropdown';
export * from './empty';
export * from './select';
export default {
    install: (app: App) => {
        app.use(XNCascader);
        app.use(XNDataTable);
        app.use(XNDropdown);
        app.use(XNEmpty);
        app.use(XNSelect);
    }
};
