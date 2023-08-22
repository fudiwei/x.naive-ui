import type { App } from 'vue';

import Dropdown from './Dropdown';
import DropdownDivider from './DropdownDivider';
import DropdownItem from './DropdownItem';

export type { DropdownProps } from './Dropdown';
export type { DropdownItemProps } from './DropdownItem';
export { Dropdown, DropdownDivider, DropdownItem };
export default Object.assign(Dropdown, {
    Divider: DropdownDivider,
    Item: DropdownItem,
    install: (app: App) => {
        app.component(Dropdown.name, Dropdown);
        app.component(DropdownDivider.name, DropdownDivider);
        app.component(DropdownItem.name, DropdownItem);
    }
});
