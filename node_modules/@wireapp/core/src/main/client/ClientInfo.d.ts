import type { ClientClassification, Location } from '@wireapp/api-client/src/client/';
export interface ClientInfo {
    classification: ClientClassification.DESKTOP | ClientClassification.PHONE | ClientClassification.TABLET;
    cookieLabel: string;
    label?: string;
    location?: Location;
    model: string;
}
