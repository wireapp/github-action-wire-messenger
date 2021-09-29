import type { User } from '../User';
export interface UserUpdateData {
    user: Partial<User> & {
        id: string;
    };
}
