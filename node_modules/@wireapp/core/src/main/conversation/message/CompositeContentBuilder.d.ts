import { Text } from '@wireapp/protocol-messaging';
import { LegalHoldStatus } from '../content';
import type { CompositeMessage } from './OtrMessage';
export declare class CompositeContentBuilder {
    private readonly content;
    private readonly payloadBundle;
    private readonly items;
    constructor(payloadBundle: CompositeMessage);
    build(): CompositeMessage;
    withReadConfirmation(expectsReadConfirmation?: boolean): CompositeContentBuilder;
    withLegalHoldStatus(legalHoldStatus?: LegalHoldStatus): CompositeContentBuilder;
    addText(text: Text): CompositeContentBuilder;
    addButton(buttonText: string, id?: string): CompositeContentBuilder;
}
