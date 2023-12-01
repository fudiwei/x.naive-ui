import { useNotification as useNNotification, createDiscreteApi as createNDiscreteApi } from 'naive-ui';

import { globalThisGetter } from '../_utils/internal';
import * as logger from '../_utils/logger';

const { notification: nNotification } = createNDiscreteApi(['notification']);

/**
 * @deprecated
 */
export type NotificationApi = ReturnType<typeof useNNotification>;

/**
 * @deprecated
 */
export default function useNotification(throwOnNoProvider = false): NotificationApi {
    try {
        return globalThisGetter('notification', useNNotification)!;
    } catch (err) {
        if (throwOnNoProvider) {
            throw err;
        } else if (__DEV__) {
            logger.error(String(err).replace('Error: [naive/use-notification]: ', ''));
        }

        return nNotification;
    }
}
