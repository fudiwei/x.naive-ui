import { useLoadingBar as useNLoadingBar, createDiscreteApi as createNDiscreteApi } from 'naive-ui';

import { globalThisGetter } from '../_utils/internal';
import * as logger from '../_utils/logger';

const { loadingBar: nLoadingBar } = createNDiscreteApi(['loadingBar']);

export type LoadingBarApi = ReturnType<typeof useNLoadingBar>;
export default function useLoadingBar(throwOnNoProvider = false): LoadingBarApi {
    try {
        return globalThisGetter('loadingBar', useNLoadingBar)!;
    } catch (err) {
        if (throwOnNoProvider) {
            throw err;
        } else if (__DEV__) {
            logger.error(String(err).replace('Error: [naive/use-loading-bar]: ', ''));
        }

        return nLoadingBar;
    }
}
