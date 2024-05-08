import type { App } from 'vue';

import ComponentButton from './Button';

export type { ButtonProps } from './Button';
export const XNButton = Object.assign(ComponentButton, {
    install: (app: App) => {
        app.component(ComponentButton.name!, ComponentButton);
    }
});
export default XNButton;
