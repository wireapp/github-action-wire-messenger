import type { HttpClient } from '../http/';
import type { Notification, NotificationList } from './';
export declare const NOTIFICATION_SIZE_MAXIMUM = 10000;
export declare class NotificationAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        LAST: string;
        NOTIFICATION: string;
    };
    /**
     * Fetch the last notification.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/getLastNotification
     */
    getLastNotification(clientId?: string): Promise<Notification>;
    /**
     * Fetch paged notifications.
     * @param clientId Only return notifications targeted at the given client.
     * @param size Maximum number of notifications to return.
     * @param since Only return notifications more recent than this.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/fetchNotifications
     */
    getNotifications(clientId?: string, size?: number, since?: string): Promise<NotificationList>;
    /**
     * Fetch all notifications.
     * @param clientId Only return notifications targeted at the given client
     * @param lastNotificationId Only return notifications more recent than this
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/fetchNotifications
     */
    getAllNotifications(clientId?: string, lastNotificationId?: string): Promise<Notification[]>;
    /**
     * Fetch a notification by ID.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/getNotification
     */
    getNotification(notificationId: string, clientId?: string): Promise<Notification>;
}
