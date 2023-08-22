import type { App } from 'vue';

import DataTable from './data-table';
import Dropdown from './dropdown';
import Empty from './empty';
import Select from './select';

export type * from './data-table';
export type * from './dropdown';
export type * from './empty';
export type * from './select';
export * from './data-table';
export * from './dropdown';
export * from './empty';
export * from './select';
export default {
    install: (app: App) => {
        app.use(DataTable);
        app.use(Dropdown);
        app.use(Empty);
        app.use(Select);
    }
};
