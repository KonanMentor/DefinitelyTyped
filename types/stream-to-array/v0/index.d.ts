// Type definitions for stream-to-array 0.x
// Project: https://github.com/stream-utils/stream-to-array
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare function toArray(stream: NodeJS.ReadableStream, callback: (err: any, arr: any[]) => void): NodeJS.ReadWriteStream;
export = toArray;
