"use strict";
/*
 * Wire
 * Copyright (C) 2020 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECEIPT_MODE = void 0;
/**
 * In 1:1 team conversations the value is `null` (no read receipts) by default.
 * When creating a group conversation, then the user can actively decide if read receipts should be turned on or off.
 */
var RECEIPT_MODE;
(function (RECEIPT_MODE) {
    RECEIPT_MODE[RECEIPT_MODE["OFF"] = 0] = "OFF";
    RECEIPT_MODE[RECEIPT_MODE["ON"] = 1] = "ON";
})(RECEIPT_MODE = exports.RECEIPT_MODE || (exports.RECEIPT_MODE = {}));
//# sourceMappingURL=ConversationReceiptModeUpdateData.js.map