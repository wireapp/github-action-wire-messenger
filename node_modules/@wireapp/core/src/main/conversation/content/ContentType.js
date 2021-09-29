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
exports.isTextContent = exports.isReactionContent = exports.isLocationContent = exports.isImageContent = exports.isImageAssetContent = exports.isHiddenContent = exports.isFileAssetMetaDataContent = exports.isFileAssetContent = exports.isFileAssetAbortContent = exports.isEditedTextContent = exports.isDeletedContent = exports.isConnection = exports.isConfirmationContent = exports.isClientActionType = exports.isClientActionContent = exports.isClearedContent = exports.isAssetContent = exports.isAbortedAssetContent = void 0;
function isAbortedAssetContent(content) {
    return !!content.abortReason;
}
exports.isAbortedAssetContent = isAbortedAssetContent;
function isAssetContent(content) {
    return !!(content.uploaded || content.preview);
}
exports.isAssetContent = isAssetContent;
function isClearedContent(content) {
    return !!content.clearedTimestamp;
}
exports.isClearedContent = isClearedContent;
function isClientActionContent(content) {
    return !!content.clientAction;
}
exports.isClientActionContent = isClientActionContent;
function isClientActionType(content) {
    return typeof content === 'number';
}
exports.isClientActionType = isClientActionType;
function isConfirmationContent(content) {
    return !!content.firstMessageId;
}
exports.isConfirmationContent = isConfirmationContent;
function isConnection(content) {
    return !!content.from && !!content.to;
}
exports.isConnection = isConnection;
function isDeletedContent(content) {
    return !!content.messageId && !content.text;
}
exports.isDeletedContent = isDeletedContent;
function isEditedTextContent(content) {
    return !!content.text && !!content.originalMessageId;
}
exports.isEditedTextContent = isEditedTextContent;
function isFileAssetAbortContent(content) {
    return !!content.reason;
}
exports.isFileAssetAbortContent = isFileAssetAbortContent;
function isFileAssetContent(content) {
    return !!content.asset && !!content.file;
}
exports.isFileAssetContent = isFileAssetContent;
function isFileAssetMetaDataContent(content) {
    return !!content.metaData;
}
exports.isFileAssetMetaDataContent = isFileAssetMetaDataContent;
function isHiddenContent(content) {
    return !!content.conversationId;
}
exports.isHiddenContent = isHiddenContent;
function isImageAssetContent(content) {
    return !!content.asset && !!content.image;
}
exports.isImageAssetContent = isImageAssetContent;
function isImageContent(content) {
    return !!content.data && !!content.type;
}
exports.isImageContent = isImageContent;
function isLocationContent(content) {
    return !!content.latitude && !!content.longitude;
}
exports.isLocationContent = isLocationContent;
function isReactionContent(content) {
    return !!content.type && !!content.originalMessageId;
}
exports.isReactionContent = isReactionContent;
function isTextContent(content) {
    return !!content.text;
}
exports.isTextContent = isTextContent;
//# sourceMappingURL=ContentType.js.map