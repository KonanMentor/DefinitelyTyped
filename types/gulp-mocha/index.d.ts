// Type definitions for gulp-mocha
// Project: https://github.com/sindresorhus/gulp-mocha
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="mocha"/>
/// <reference types="node"/>


declare function mocha(setupOptions?: MochaSetupOptions): NodeJS.ReadWriteStream;
declare namespace mocha { }
export = mocha;
