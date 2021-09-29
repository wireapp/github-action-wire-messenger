export interface RegisteredServiceProvider {
    id: string;
    /** Only provided if it was generated on the server. */
    password?: string;
}
