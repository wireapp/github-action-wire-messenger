import type { User } from '../user/';
export declare type UserUpdate = Partial<Pick<User, 'name'> & Pick<User, 'assets' | 'accent_id'>>;
