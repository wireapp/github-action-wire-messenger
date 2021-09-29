/**
 * In 1:1 team conversations the value is `null` (no read receipts) by default.
 * When creating a group conversation, then the user can actively decide if read receipts should be turned on or off.
 */
export declare enum RECEIPT_MODE {
    OFF = 0,
    ON = 1
}
export interface ConversationReceiptModeUpdateData {
    receipt_mode: RECEIPT_MODE.OFF | RECEIPT_MODE.ON;
}
