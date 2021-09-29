export interface IdentityProvider {
    extraInfo: string;
    id: string;
    metadata: IdentityProviderMetaData;
}
export interface IdentityProviderMetaData {
    certAuthnResponse: string[];
    issuer: string;
    requestURI: string;
}
