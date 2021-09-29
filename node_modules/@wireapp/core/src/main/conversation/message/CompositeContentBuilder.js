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
exports.CompositeContentBuilder = void 0;
const protocol_messaging_1 = require("@wireapp/protocol-messaging");
const content_1 = require("../content");
const MessageBuilder_1 = require("./MessageBuilder");
class CompositeContentBuilder {
    constructor(payloadBundle) {
        this.content = {};
        this.items = [];
        this.payloadBundle = payloadBundle;
    }
    build() {
        this.payloadBundle.content = this.content;
        this.payloadBundle.content.items = this.items;
        return this.payloadBundle;
    }
    withReadConfirmation(expectsReadConfirmation = false) {
        this.content.expectsReadConfirmation = expectsReadConfirmation;
        return this;
    }
    withLegalHoldStatus(legalHoldStatus = content_1.LegalHoldStatus.UNKNOWN) {
        this.content.legalHoldStatus = legalHoldStatus;
        return this;
    }
    addText(text) {
        this.items.push(protocol_messaging_1.Composite.Item.create({ text }));
        return this;
    }
    addButton(buttonText, id = MessageBuilder_1.MessageBuilder.createId()) {
        this.items.push(protocol_messaging_1.Composite.Item.create({ button: protocol_messaging_1.Button.create({ id, text: buttonText }) }));
        return this;
    }
}
exports.CompositeContentBuilder = CompositeContentBuilder;
//# sourceMappingURL=CompositeContentBuilder.js.map