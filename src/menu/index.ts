import type { App } from 'vue';

import ComponentMenu from './Menu';
import ComponentMenuDivider from './MenuDivider';
import ComponentMenuItem from './MenuItem';
import ComponentMenuItemGroup from './MenuItemGroup';

export type {
    MenuProps,
    MenuInstance,
    MenuOption,
    MenuOptions,
    MenuRenderLabelParams,
    MenuRenderExtraParams,
    MenuRenderIconParams
} from './Menu';
export type { MenuItemProps } from './MenuItem';
export type { MenuItemGroupProps } from './MenuItemGroup';
export const XNMenu = Object.assign(ComponentMenu, {
    Divider: ComponentMenuDivider,
    Item: ComponentMenuItem,
    ItemGroup: ComponentMenuItemGroup,
    install: (app: App) => {
        app.component(ComponentMenu.name, ComponentMenu);
        app.component(ComponentMenuDivider.name, ComponentMenuDivider);
        app.component(ComponentMenuItem.name, ComponentMenuItem);
        app.component(ComponentMenuItemGroup.name, ComponentMenuItemGroup);
    }
});
export const XNMenuDivider = ComponentMenuDivider;
export const XNMenuItem = ComponentMenuItem;
export const XNMenuItemGroup = ComponentMenuItemGroup;
export default XNMenu;
