﻿import type { App } from 'vue';

import XNButton from './button';
import XNCascader from './cascader';
import XNDataTable from './data-table';
import XNDropdown from './dropdown';
import XNEmpty from './empty';
import XNMenu from './menu';
import XNPopselect from './popselect';
import XNSelect from './select';
import XNTree from './tree';
import XNTreeSelect from './tree-select';

export type * from './button';
export type * from './cascader';
export type * from './data-table';
export type * from './dropdown';
export type * from './empty';
export type * from './menu';
export type * from './popselect';
export type * from './select';
export type * from './tree';
export type * from './tree-select';
export * from './button';
export * from './cascader';
export * from './data-table';
export * from './dropdown';
export * from './empty';
export * from './menu';
export * from './popselect';
export * from './select';
export * from './tree';
export * from './tree-select';
export default {
  install: (app: App) => {
    app.use(XNButton);
    app.use(XNCascader);
    app.use(XNDataTable);
    app.use(XNDropdown);
    app.use(XNEmpty);
    app.use(XNMenu);
    app.use(XNPopselect);
    app.use(XNSelect);
    app.use(XNTree);
    app.use(XNTreeSelect);
  }
};
