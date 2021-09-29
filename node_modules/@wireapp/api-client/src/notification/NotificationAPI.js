"use strict";
/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAPI = exports.NOTIFICATION_SIZE_MAXIMUM = void 0;
exports.NOTIFICATION_SIZE_MAXIMUM = 10000;
class NotificationAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Fetch the last notification.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/getLastNotification
     */
    async getLastNotification(clientId) {
        const config = {
            method: 'get',
            params: {
                client: clientId,
            },
            url: `${NotificationAPI.URL.NOTIFICATION}/${NotificationAPI.URL.LAST}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Fetch paged notifications.
     * @param clientId Only return notifications targeted at the given client.
     * @param size Maximum number of notifications to return.
     * @param since Only return notifications more recent than this.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/fetchNotifications
     */
    async getNotifications(clientId, size = exports.NOTIFICATION_SIZE_MAXIMUM, since) {
        const config = {
            method: 'get',
            params: {
                client: clientId,
                since,
                size,
            },
            url: NotificationAPI.URL.NOTIFICATION,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
    /**
     * Fetch all notifications.
     * @param clientId Only return notifications targeted at the given client
     * @param lastNotificationId Only return notifications more recent than this
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/fetchNotifications
     */
    async getAllNotifications(clientId, lastNotificationId) {
        let notificationList = [];
        const getNotificationChunks = async (clientId, lastNotificationId) => {
            const { notifications, has_more } = await this.getNotifications(clientId, exports.NOTIFICATION_SIZE_MAXIMUM, lastNotificationId);
            if (notifications.length) {
                notificationList = notificationList.concat(notifications);
            }
            if (has_more) {
                const lastNotification = notifications[notifications.length - 1];
                if (lastNotification) {
                    return getNotificationChunks(clientId, lastNotification.id);
                }
            }
            return notificationList;
        };
        return getNotificationChunks(clientId, lastNotificationId);
    }
    /**
     * Fetch a notification by ID.
     * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/push/getNotification
     */
    async getNotification(notificationId, clientId) {
        const config = {
            method: 'get',
            params: {
                client: clientId,
            },
            url: `${NotificationAPI.URL.NOTIFICATION}/${notificationId}`,
        };
        const response = await this.client.sendJSON(config);
        return response.data;
    }
}
exports.NotificationAPI = NotificationAPI;
NotificationAPI.URL = {
    LAST: 'last',
    NOTIFICATION: '/notifications',
};
//# sourceMappingURL=NotificationAPI.js.map