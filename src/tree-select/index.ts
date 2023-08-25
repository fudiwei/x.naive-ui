import type { App } from 'vue';

import ComponentTreeSelect from './TreeSelect';

export type {
    TreeSelectProps,
    TreeSelectInstance,
    TreeSelectOption,
    TreeSelectOptions,
    TreeSelectRenderLabelParams,
    TreeSelectRenderPrefixParams,
    TreeSelectRenderSuffixParams,
    TreeSelectRenderSwitcherIconParams,
    TreeSelectRenderTagParams
} from './TreeSelect';
export const XNTreeSelect = Object.assign(ComponentTreeSelect, {
    install: (app: App) => {
        app.component(ComponentTreeSelect.name, ComponentTreeSelect);
    }
});
export default XNTreeSelect;
