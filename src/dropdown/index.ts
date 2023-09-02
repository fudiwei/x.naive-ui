import type { App } from 'vue';

import ComponentDropdown from './Dropdown';
import ComponentDropdownDivider from './DropdownDivider';
import ComponentDropdownItem from './DropdownItem';

export type {
    DropdownProps,
    DropdownOption,
    DropdownOptions,
    DropdownRenderLabelParams,
    DropdownRenderOptionParams,
    DropdownRenderIconParams
} from './Dropdown';
export type { DropdownItemProps } from './DropdownItem';
export const XNDropdown = Object.assign(ComponentDropdown, {
    Divider: ComponentDropdownDivider,
    Item: ComponentDropdownItem,
    install: (app: App) => {
        app.component(ComponentDropdown.name, ComponentDropdown);
        app.component(ComponentDropdownDivider.name, ComponentDropdownDivider);
        app.component(ComponentDropdownItem.name, ComponentDropdownItem);
    }
});
export const XNDropdownDivider = ComponentDropdownDivider;
export const XNDropdownItem = ComponentDropdownItem;
export default XNDropdown;
