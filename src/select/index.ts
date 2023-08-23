import type { App } from 'vue';

import XNSelect from './Select';
import XNSelectOption from './SelectOption';
import XNSelectOptionGroup from './SelectOptionGroup';

export type {
    SelectProps,
    SelectOption,
    SelectOptions,
    SelectRenderLabelParams,
    SelectRenderOptionParams,
    SelectRenderTagParams
} from './Select';
export type { SelectOptionProps } from './SelectOption';
export type { SelectOptionGroupProps } from './SelectOptionGroup';
export { XNSelect, XNSelectOption, XNSelectOptionGroup };
export default Object.assign(XNSelect, {
    Option: XNSelectOption,
    OptionGroup: XNSelectOptionGroup,
    install: (app: App) => {
        app.component(XNSelect.name, XNSelect);
        app.component(XNSelectOption.name, XNSelectOption);
        app.component(XNSelectOptionGroup.name, XNSelectOptionGroup);
    }
});
