import type { App } from 'vue';

import { COMLIB_PREFIX } from '../_utils';
import Dropdown from './Dropdown';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';

export type { DropdownProps } from './Dropdown';
export type { DropdownItemProps } from './DropdownItem';
export type { DropdownDividerProps } from './DropdownDivider';
export { Dropdown, DropdownDivider, DropdownItem };
export default Object.assign(Dropdown, {
    Divider: DropdownDivider,
    Item: DropdownItem,
    install: (app: App) => {
        app.component(COMLIB_PREFIX + Dropdown.name, Dropdown);
        app.component(COMLIB_PREFIX + DropdownDivider.name, DropdownDivider);
        app.component(COMLIB_PREFIX + DropdownItem.name, DropdownItem);
    }
});
