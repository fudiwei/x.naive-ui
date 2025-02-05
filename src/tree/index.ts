import type { App } from 'vue';

import ComponentTree from './Tree';

export type {
  TreeProps,
  TreeInstance,
  TreeOption,
  TreeOptions,
  TreeRenderLabelParams,
  TreeRenderPrefixParams,
  TreeRenderSuffixParams,
  TreeRenderSwitcherIconParams
} from './Tree';
export const XNTree = Object.assign(ComponentTree, {
  install: (app: App) => {
    app.component(ComponentTree.name!, ComponentTree);
  }
});
export default XNTree;
