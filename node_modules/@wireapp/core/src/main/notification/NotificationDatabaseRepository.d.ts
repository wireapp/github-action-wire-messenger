import type { BackendEvent } from '@wireapp/api-client/src/event';
import type { Notification } from '@wireapp/api-client/src/notification/';
import type { CRUDEngine } from '@wireapp/store-engine';
export declare enum DatabaseStores {
    EVENTS = "events"
}
export declare enum DatabaseKeys {
    PRIMARY_KEY_LAST_EVENT = "z.storage.StorageKey.EVENT.LAST_DATE",
    PRIMARY_KEY_LAST_NOTIFICATION = "z.storage.StorageKey.NOTIFICATION.LAST_ID"
}
export declare class NotificationDatabaseRepository {
    private readonly storeEngine;
    constructor(storeEngine: CRUDEngine);
    getNotificationEventList(): Promise<BackendEvent[]>;
    getLastEventDate(): Promise<Date>;
    updateLastEventDate(eventDate: Date): Promise<Date>;
    createLastEventDate(eventDate: Date): Promise<Date>;
    getLastNotificationId(): Promise<string>;
    updateLastNotificationId(lastNotification: Notification): Promise<string>;
}
