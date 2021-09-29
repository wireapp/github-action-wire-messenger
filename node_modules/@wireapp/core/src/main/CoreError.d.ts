import type { Notification } from '@wireapp/api-client/src/notification';
export declare enum CoreError {
    NOTIFICATION_ERROR = "CoreError.NOTIFICATION_ERROR"
}
export interface NotificationError {
    error: Error;
    notification: Notification;
    type: CoreError.NOTIFICATION_ERROR;
}
