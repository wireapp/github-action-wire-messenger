import type { UserPushTokenProvider } from './UserPushTokenProvider';
export interface UserPushRemoveData {
    token: {
        app: string;
        client: string;
        token: string;
        transport: UserPushTokenProvider;
    };
}
