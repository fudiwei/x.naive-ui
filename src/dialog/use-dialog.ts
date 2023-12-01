import { useDialog as useNDialog, createDiscreteApi as createNDiscreteApi } from 'naive-ui';

import { globalThisGetter } from '../_utils/internal';
import * as logger from '../_utils/logger';

const { dialog: nDialog } = createNDiscreteApi(['dialog']);

/**
 * @deprecated
 */
export type DialogApi = ReturnType<typeof useNDialog>;

/**
 * @deprecated
 */
export default function useDialog(throwOnNoProvider = false): DialogApi {
    try {
        return globalThisGetter('dialog', useNDialog)!;
    } catch (err) {
        if (throwOnNoProvider) {
            throw err;
        } else if (__DEV__) {
            logger.error(String(err).replace('Error: [naive/use-dialog]: ', ''));
        }

        return nDialog;
    }
}
