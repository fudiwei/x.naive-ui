declare module 'vue' {
    export interface GlobalComponents {
        XNCascader: (typeof import('@skit/x.naive-ui'))['XNCascader'];

        XNDataTable: (typeof import('@skit/x.naive-ui'))['XNDataTable'];
        XNDataTableColumn: (typeof import('@skit/x.naive-ui'))['XNDataTableColumn'];

        XNDropdown: (typeof import('@skit/x.naive-ui'))['XNDropdown'];
        XNDropdownItem: (typeof import('@skit/x.naive-ui'))['XNDropdownItem'];
        XNDropdownDivider: (typeof import('@skit/x.naive-ui'))['XNDropdownDivider'];

        XNEmpty: (typeof import('@skit/x.naive-ui'))['XNEmpty'];

        XNMenu: (typeof import('@skit/x.naive-ui'))['XNMenu'];
        XNMenuItem: (typeof import('@skit/x.naive-ui'))['XNMenuItem'];
        XNMenuItemGroup: (typeof import('@skit/x.naive-ui'))['XNMenuItemGroup'];
        XNMenuDivider: (typeof import('@skit/x.naive-ui'))['XNMenuDivider'];

        XNSelect: (typeof import('@skit/x.naive-ui'))['XNSelect'];
        XNSelectOption: (typeof import('@skit/x.naive-ui'))['XNSelectOption'];
        XNSelectOptionGroup: (typeof import('@skit/x.naive-ui'))['XNSelectOptionGroup'];

        XNTree: (typeof import('@skit/x.naive-ui'))['XNTree'];

        XNTreeSelect: (typeof import('@skit/x.naive-ui'))['XNTreeSelect'];
    }
}

export {};
