import type { APIClient } from '@wireapp/api-client';
import type { Notification } from '@wireapp/api-client/src/notification/';
export declare class NotificationBackendRepository {
    private readonly apiClient;
    constructor(apiClient: APIClient);
    getAllNotifications(clientId?: string, lastNotificationId?: string): Promise<Notification[]>;
    getLastNotification(clientId?: string): Promise<Notification>;
}
