// Type definitions for klaw v2.1.1
// Project: https://github.com/jprichardson/node-klaw
// Definitions by: Matthew McEachen <https://github.com/mceachen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare module "klaw" {

    import * as fs from "fs"
    import { Readable, ReadableOptions } from 'stream'

    function K(root: string, options?: K.Options): K.Walker

    namespace K {
        interface Item {
            path: string
            stats: fs.Stats
        }

        type QueueMethod = "shift" | "pop"

        interface Options extends ReadableOptions {
            queueMethod?: QueueMethod
            pathSorter?: (pathA: string, pathB: string) => number
            fs?: any // fs or mock-fs
            filter?: (path: string) => boolean
            depthLimit?: number
        }

        type Event = "close" | "data" | "end" | "readable" | "error"

        interface Walker extends Readable {
            on(event: Event, listener: Function): this
            on(event: "close", listener: () => void): this
            on(event: "data", listener: (item: Item) => void): this
            on(event: "end", listener: () => void): this
            on(event: "readable", listener: () => void): this
            on(event: "error", listener: (err: Error) => void): this
            read(): Item
        }
    }

    export = K
}
