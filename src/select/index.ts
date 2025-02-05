import type { App } from 'vue';

import ComponentSelect from './Select';
import ComponentSelectOption from './SelectOption';
import ComponentSelectOptionGroup from './SelectOptionGroup';

export type {
  SelectProps,
  SelectInstance,
  SelectOption,
  SelectOptions,
  SelectRenderLabelParams,
  SelectRenderOptionParams,
  SelectRenderTagParams
} from './Select';
export type { SelectOptionProps } from './SelectOption';
export type { SelectOptionGroupProps } from './SelectOptionGroup';
export const XNSelect = Object.assign(ComponentSelect, {
  Option: ComponentSelectOption,
  OptionGroup: ComponentSelectOptionGroup,
  install: (app: App) => {
    app.component(ComponentSelect.name!, ComponentSelect);
    app.component(ComponentSelectOption.name!, ComponentSelectOption);
    app.component(ComponentSelectOptionGroup.name!, ComponentSelectOptionGroup);
  }
});
export const XNSelectOption = ComponentSelectOption;
export const XNSelectOptionGroup = ComponentSelectOptionGroup;
export default XNSelect;
