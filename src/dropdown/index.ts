import type { App } from 'vue';

import XNDropdown from './Dropdown';
import XNDropdownDivider from './DropdownDivider';
import XNDropdownItem from './DropdownItem';

export type { DropdownProps } from './Dropdown';
export type { DropdownItemProps } from './DropdownItem';
export { XNDropdown, XNDropdownDivider, XNDropdownItem };
export default Object.assign(XNDropdown, {
    Divider: XNDropdownDivider,
    Item: XNDropdownItem,
    install: (app: App) => {
        app.component(XNDropdown.name, XNDropdown);
        app.component(XNDropdownDivider.name, XNDropdownDivider);
        app.component(XNDropdownItem.name, XNDropdownItem);
    }
});
