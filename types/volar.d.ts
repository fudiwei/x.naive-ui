declare module 'vue' {
    export interface GlobalComponents {
        XNDataTable: (typeof import('@skit/x.naive-ui'))['DataTable'];

        XNDropdown: (typeof import('@skit/x.naive-ui'))['Dropdown'];
        XNDropdownItem: (typeof import('@skit/x.naive-ui'))['DropdownItem'];
        XNDropdownDivider: (typeof import('@skit/x.naive-ui'))['DropdownDivider'];

        XNEmpty: (typeof import('@skit/x.naive-ui'))['Empty'];
    }
}

export {};
