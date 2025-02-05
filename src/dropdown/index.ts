import type { App } from 'vue';

import ComponentDropdown from './Dropdown';
import ComponentDropdownDivider from './DropdownDivider';
import ComponentDropdownItem from './DropdownItem';
import ComponentDropdownItemGroup from './DropdownItemGroup';

export type {
  DropdownProps,
  DropdownOption,
  DropdownOptions,
  DropdownRenderLabelParams,
  DropdownRenderOptionParams,
  DropdownRenderIconParams
} from './Dropdown';
export type { DropdownItemProps } from './DropdownItem';
export type { DropdownItemGroupProps } from './DropdownItemGroup';
export const XNDropdown = Object.assign(ComponentDropdown, {
  Divider: ComponentDropdownDivider,
  Item: ComponentDropdownItem,
  install: (app: App) => {
    app.component(ComponentDropdown.name!, ComponentDropdown);
    app.component(ComponentDropdownDivider.name!, ComponentDropdownDivider);
    app.component(ComponentDropdownItem.name!, ComponentDropdownItem);
    app.component(ComponentDropdownItemGroup.name!, ComponentDropdownItemGroup);
  }
});
export const XNDropdownDivider = ComponentDropdownDivider;
export const XNDropdownItem = ComponentDropdownItem;
export const XNDropdownItemGroup = ComponentDropdownItemGroup;
export default XNDropdown;
