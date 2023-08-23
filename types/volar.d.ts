declare module 'vue' {
    export interface GlobalComponents {
        XNDataTable: (typeof import('@skit/x.naive-ui'))['XNDataTable'];

        XNDropdown: (typeof import('@skit/x.naive-ui'))['XNDropdown'];
        XNDropdownItem: (typeof import('@skit/x.naive-ui'))['XNDropdownItem'];
        XNDropdownDivider: (typeof import('@skit/x.naive-ui'))['XNDropdownDivider'];

        XNSelect: (typeof import('@skit/x.naive-ui'))['XNSelect'];
        XNSelectOption: (typeof import('@skit/x.naive-ui'))['XNSelectOption'];
        XNSelectOptionGroup: (typeof import('@skit/x.naive-ui'))['XNSelectOptionGroup'];

        XNEmpty: (typeof import('@skit/x.naive-ui'))['XNEmpty'];
    }
}

export {};
