import type { Provider } from '../team/service';
export interface NewServiceProvider extends Pick<Provider, 'description' | 'email' | 'name' | 'url'> {
    /** If none provided, a password is generated on the server. */
    password?: string;
}
