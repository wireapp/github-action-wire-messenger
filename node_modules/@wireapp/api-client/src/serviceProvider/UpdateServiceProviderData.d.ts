import type { NewServiceProvider } from './NewServiceProvider';
export declare type UpdateServiceProviderData = Partial<Omit<NewServiceProvider, 'email' | 'password'>>;
