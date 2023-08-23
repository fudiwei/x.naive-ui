import type { App } from 'vue';

import Select from './Select';
import SelectOption from './SelectOption';
import SelectOptionGroup from './SelectOptionGroup';

export type {
    SelectProps,
    SelectRenderLabelParams,
    SelectRenderOptionParams,
    SelectRenderTagParams
} from './Select';
export type { SelectOptionProps } from './SelectOption';
export type { SelectOptionGroupProps } from './SelectOptionGroup';
export { Select, SelectOption, SelectOptionGroup };
export default Object.assign(Select, {
    Option: SelectOption,
    OptionGroup: SelectOptionGroup,
    install: (app: App) => {
        app.component(Select.name, Select);
        app.component(SelectOption.name, SelectOption);
        app.component(SelectOptionGroup.name, SelectOptionGroup);
    }
});
