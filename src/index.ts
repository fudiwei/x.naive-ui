import type { App } from 'vue';

import DataTable from './data-table';
import Dropdown from './dropdown';
import Empty from './empty';

export type * from './data-table';
export type * from './dropdown';
export type * from './empty';
export * from './data-table';
export * from './dropdown';
export * from './empty';
export default {
    install: (app: App) => {
        app.use(DataTable);
        app.use(Dropdown);
        app.use(Empty);
    }
};
