"use strict";
/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
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
exports.TextContentBuilder = void 0;
const cryptography_1 = require("../../cryptography");
const content_1 = require("../content");
class TextContentBuilder {
    constructor(payloadBundle) {
        this.payloadBundle = payloadBundle;
        this.content = this.payloadBundle.content;
    }
    build() {
        this.payloadBundle.content = this.content;
        return this.payloadBundle;
    }
    withLinkPreviews(linkPreviews) {
        if (linkPreviews === null || linkPreviews === void 0 ? void 0 : linkPreviews.length) {
            this.content.linkPreviews = linkPreviews;
        }
        return this;
    }
    withMentions(mentions) {
        if (mentions === null || mentions === void 0 ? void 0 : mentions.length) {
            this.content.mentions = mentions;
        }
        return this;
    }
    withQuote(quote) {
        if (quote) {
            if (quote.quotedMessageId) {
                this.content.quote = quote;
            }
            else {
                const messageHashService = new cryptography_1.MessageHashService(quote.content, quote.timestamp);
                const messageHashBuffer = messageHashService.getHash();
                this.content.quote = {
                    quotedMessageId: quote.id,
                    quotedMessageSha256: new Uint8Array(messageHashBuffer),
                };
            }
        }
        return this;
    }
    withReadConfirmation(expectsReadConfirmation = false) {
        if (typeof expectsReadConfirmation !== 'undefined') {
            this.content.expectsReadConfirmation = expectsReadConfirmation;
        }
        return this;
    }
    withLegalHoldStatus(legalHoldStatus = content_1.LegalHoldStatus.UNKNOWN) {
        if (typeof legalHoldStatus !== 'undefined') {
            this.content.legalHoldStatus = legalHoldStatus;
        }
        return this;
    }
}
exports.TextContentBuilder = TextContentBuilder;
//# sourceMappingURL=TextContentBuilder.js.map