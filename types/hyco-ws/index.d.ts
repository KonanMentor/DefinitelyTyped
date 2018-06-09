// Type definitions for hyco-ws 1.0
// Project: https://github.com/Azure/azure-relay-node
// Definitions by: Manuel Rodrigo Cabello <https://github.com/mrcabellom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as WebSocket from 'ws';

export class HybridConnectionWebSocketServer extends NodeJS.EventEmitter {
    constructor(options: any);
    close(callback: () => void): void;
    listenUri: string;
    closeRequested: boolean;
    options: any;
    path: string;
    clients: WebSocket[];
    controlChannel: WebSocket;
}

export function createRelayedServer(options: any, fn: (ws: WebSocket) => void): HybridConnectionWebSocketServer;
export function relayedConnect(address: string, fn: () => void): WebSocket;
export function createRelayToken(uri: string, key_name: string, key: string, expiry?: number): string;
export function appendRelayToken(uri: string, key_name: string, key: string, expiry?: number): string;
export function createRelayBaseUri(serviceBusNamespace: string, path: string): string;
export function createRelaySendUri(serviceBusNamespace: string, path: string, token?: any, id?: any): string;
export function createRelayListenUri(serviceBusNamespace: string, path: string, token?: any, id?: any): string;
