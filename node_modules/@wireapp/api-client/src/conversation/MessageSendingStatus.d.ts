import { QualifiedUserClients } from './QualifiedUserClients';
export interface MessageSendingStatus {
    deleted: QualifiedUserClients;
    failed_to_send: QualifiedUserClients;
    missing: QualifiedUserClients;
    redundant: QualifiedUserClients;
    time: string;
}
