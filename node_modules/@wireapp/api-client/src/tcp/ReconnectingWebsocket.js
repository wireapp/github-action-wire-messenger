"use strict";
/*
 * Wire
 * Copyright (C) 2019 Wire Swiss GmbH
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconnectingWebsocket = exports.PingMessage = exports.WEBSOCKET_STATE = exports.CloseEventCode = void 0;
const commons_1 = require("@wireapp/commons");
const logdown_1 = __importDefault(require("logdown"));
const reconnecting_websocket_1 = __importDefault(require("reconnecting-websocket"));
const NodeWebSocket = require('ws');
const buffer = __importStar(require("../shims/node/buffer"));
var CloseEventCode;
(function (CloseEventCode) {
    CloseEventCode[CloseEventCode["NORMAL_CLOSURE"] = 1000] = "NORMAL_CLOSURE";
    CloseEventCode[CloseEventCode["GOING_AWAY"] = 1001] = "GOING_AWAY";
    CloseEventCode[CloseEventCode["PROTOCOL_ERROR"] = 1002] = "PROTOCOL_ERROR";
    CloseEventCode[CloseEventCode["UNSUPPORTED_DATA"] = 1003] = "UNSUPPORTED_DATA";
})(CloseEventCode = exports.CloseEventCode || (exports.CloseEventCode = {}));
var WEBSOCKET_STATE;
(function (WEBSOCKET_STATE) {
    WEBSOCKET_STATE[WEBSOCKET_STATE["CONNECTING"] = 0] = "CONNECTING";
    WEBSOCKET_STATE[WEBSOCKET_STATE["OPEN"] = 1] = "OPEN";
    WEBSOCKET_STATE[WEBSOCKET_STATE["CLOSING"] = 2] = "CLOSING";
    WEBSOCKET_STATE[WEBSOCKET_STATE["CLOSED"] = 3] = "CLOSED";
})(WEBSOCKET_STATE = exports.WEBSOCKET_STATE || (exports.WEBSOCKET_STATE = {}));
var PingMessage;
(function (PingMessage) {
    PingMessage["PING"] = "ping";
    PingMessage["PONG"] = "pong";
})(PingMessage = exports.PingMessage || (exports.PingMessage = {}));
class ReconnectingWebsocket {
    constructor(onReconnect, options = {}) {
        this.onReconnect = onReconnect;
        this.PING_INTERVAL = commons_1.TimeUtil.TimeInMillis.SECOND * 20;
        this.internalOnError = (error) => {
            this.logger.warn('WebSocket connection error', error);
            if (this.onError) {
                this.onError(error);
            }
        };
        this.internalOnMessage = (event) => {
            this.logger.debug('Incoming message');
            const data = buffer.bufferToString(event.data);
            if (data === PingMessage.PONG) {
                this.logger.debug('Received pong from WebSocket');
                this.hasUnansweredPing = false;
            }
            else if (this.onMessage) {
                this.onMessage(data);
            }
        };
        this.internalOnOpen = (event) => {
            this.logger.debug('WebSocket opened');
            if (this.socket) {
                this.socket.binaryType = 'arraybuffer';
            }
            if (this.onOpen) {
                this.onOpen(event);
            }
        };
        this.internalOnReconnect = async () => {
            this.logger.debug('Connecting to WebSocket');
            // The ping is needed to keep the connection alive as long as possible.
            // Otherwise the connection would be closed after 1 min of inactivity and re-established.
            this.startPinging();
            return this.onReconnect();
        };
        this.internalOnClose = (event) => {
            this.logger.debug('WebSocket closed');
            this.stopPinging();
            if (this.onClose) {
                this.onClose(event);
            }
        };
        this.sendPing = () => {
            if (this.socket) {
                if (this.hasUnansweredPing) {
                    this.logger.warn('Ping interval check failed');
                    this.stopPinging();
                    return;
                }
                this.hasUnansweredPing = true;
                this.send(PingMessage.PING);
            }
        };
        this.logger = (0, logdown_1.default)('@wireapp/api-client/tcp/ReconnectingWebsocket', {
            logger: console,
            markdown: false,
        });
        if (options.pingInterval) {
            this.PING_INTERVAL = options.pingInterval;
        }
        this.hasUnansweredPing = false;
    }
    connect() {
        this.socket = this.getReconnectingWebsocket();
        this.socket.onmessage = this.internalOnMessage;
        this.socket.onerror = this.internalOnError;
        this.socket.onopen = this.internalOnOpen;
        this.socket.onclose = this.internalOnClose;
    }
    send(message) {
        if (this.socket) {
            this.socket.send(message);
        }
    }
    startPinging() {
        this.stopPinging();
        this.hasUnansweredPing = false;
        this.pingerId = setInterval(this.sendPing, this.PING_INTERVAL);
    }
    stopPinging() {
        if (this.pingerId) {
            clearInterval(this.pingerId);
        }
    }
    getState() {
        return this.socket ? this.socket.readyState : WEBSOCKET_STATE.CLOSED;
    }
    disconnect(reason = 'Closed by client', keepClosed = true) {
        if (this.socket) {
            this.logger.info(`Disconnecting from WebSocket (reason: "${reason}")`);
            // TODO: 'any' can be removed once this issue is resolved:
            // https://github.com/pladaria/reconnecting-websocket/issues/44
            this.socket.close(CloseEventCode.NORMAL_CLOSURE, reason, {
                delay: 0,
                fastClose: true,
                keepClosed,
            });
        }
    }
    getReconnectingWebsocket() {
        return new reconnecting_websocket_1.default(this.internalOnReconnect, undefined, ReconnectingWebsocket.RECONNECTING_OPTIONS);
    }
    setOnOpen(onOpen) {
        this.onOpen = onOpen;
    }
    setOnMessage(onMessage) {
        this.onMessage = onMessage;
    }
    setOnError(onError) {
        this.onError = onError;
    }
    setOnClose(onClose) {
        this.onClose = onClose;
    }
}
exports.ReconnectingWebsocket = ReconnectingWebsocket;
ReconnectingWebsocket.RECONNECTING_OPTIONS = {
    WebSocket: typeof window !== 'undefined' ? WebSocket : NodeWebSocket,
    connectionTimeout: commons_1.TimeUtil.TimeInMillis.SECOND * 4,
    debug: false,
    maxReconnectionDelay: commons_1.TimeUtil.TimeInMillis.SECOND * 10,
    maxRetries: Infinity,
    minReconnectionDelay: commons_1.TimeUtil.TimeInMillis.SECOND * 4,
    reconnectionDelayGrowFactor: 1.3,
};
//# sourceMappingURL=ReconnectingWebsocket.js.map