import type { HttpClient } from '../http';
import type { CompletePasswordReset } from '../user';
import type { LoginServiceProviderData } from './LoginServiceProviderData';
import type { RegisteredServiceProvider } from './RegisteredServiceProvider';
import type { NewServiceProvider } from './NewServiceProvider';
import type { UpdateServiceProviderData } from './UpdateServiceProviderData';
export declare class ServiceProviderAPI {
    private readonly client;
    constructor(client: HttpClient);
    static readonly URL: {
        COMPLETE: string;
        LOGIN: string;
        PASSWORD_RESET: string;
        PROVIDER: string;
        REGISTER: string;
    };
    deleteServiceProvider(data: {
        password: string;
    }): Promise<void>;
    getServiceProvider(): Promise<RegisteredServiceProvider>;
    postLoginServiceProvider(data: LoginServiceProviderData): Promise<RegisteredServiceProvider>;
    postPasswordReset(data: {
        email: string;
    }): Promise<void>;
    postPasswordResetComplete(data: CompletePasswordReset): Promise<void>;
    postRegisterServiceProvider(data: NewServiceProvider): Promise<RegisteredServiceProvider>;
    putProvider(data: UpdateServiceProviderData): Promise<void>;
}
