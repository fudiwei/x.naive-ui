import { useMessage as useNMessage, createDiscreteApi as createNDiscreteApi } from 'naive-ui';

import { globalThisGetter } from '../_utils/internal';
import * as logger from '../_utils/logger';

const { message: nMessage } = createNDiscreteApi(['message']);

/**
 * @deprecated
 */
export type MessageApi = ReturnType<typeof useNMessage>;

/**
 * @deprecated
 */
export default function useMessage(throwOnNoProvider = false): MessageApi {
    try {
        return globalThisGetter('message', useNMessage)!;
    } catch (err) {
        if (throwOnNoProvider) {
            throw err;
        } else if (__DEV__) {
            logger.error(String(err).replace('Error: [naive/use-message]: ', ''));
        }

        return nMessage;
    }
}
