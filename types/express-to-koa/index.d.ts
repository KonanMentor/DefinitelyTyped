// Type definitions for express-to-koa 1.0
// Project: https://github.com/kaelzhang/express-to-koa
// Definitions by: Xiaohan Zhang <https://github.com/xiaohanzhang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from "koa";
import { IncomingMessage, ServerResponse } from "http";

export = expressToKoa;

declare function expressToKoa(
    middleware: (
        req: IncomingMessage,
        res: ServerResponse,
        next: (err?: any) => void,
    ) => void
): Koa.Middleware;
