// Type definitions for feedparser 2.2
// Project: https://github.com/danmactough/node-feedparser
// Definitions by: Juan J. Jimenez-Anca <https://github.com/cortopy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/** Declaration file generated by dts-gen */

/// <reference types="node" />

import stream = require('stream');
import { SAXStream } from 'sax';
export = FeedParser;

declare class FeedParser extends stream.Duplex {
    constructor(options: FeedParser.Options);
    options: FeedParser.Options;
    stream: SAXStream;
    meta: {
        [key: string]: any
    };
    _emitted_meta: boolean;
    stack: any[];
    xmlbase: any[];
    in_xhtml: boolean;
    xhtml: {
        [key: string]: any
    };
    errors: Error[];

    addListener(ev: any, fn: any): any;

    cork(): void;

    eventNames(): any;

    getMaxListeners(): any;

    handleAttributes(attrs: FeedParser.Attrs, el: string): any;

    handleCloseTag(el: string): void;

    handleEnd(): any;

    handleError(e: Error): void;

    handleItem(node: FeedParser.Node, type: FeedParser.Type, options: FeedParser.Options): FeedParser.Item;

    handleMeta(node: FeedParser.Node, type: FeedParser.Type, options: FeedParser.Options): FeedParser.Meta;

    handleOpenTag(node: FeedParser.Node): void;

    handleProcessingInstruction(node: FeedParser.Node): void;

    handleSaxError(e: Error): void;

    handleText(text: string): void;

    init(): void;

    isPaused(): any;

    listenerCount(type: FeedParser.Type): any;

    listeners(type: FeedParser.Type): any;

    on(ev: any, fn: any): any;

    pause(): any;

    pipe(dest: any, pipeOpts: any): any;

    push(chunk: any, encoding: any): any;

    read(n?: number): FeedParser.Item;

    removeAllListeners(type: FeedParser.Type, ...args: any[]): any;

    resume(): any;

    resumeSaxError(): void;

    setDefaultEncoding(encoding: any): any;

    setEncoding(enc: any): any;

    setMaxListeners(n: any): any;

    uncork(): void;

    unpipe(dest: any): any;

    unshift(chunk: any): any;

    wrap(stream: SAXStream, ...args: any[]): any;

    private _transform(data: any, encoding: string, done: () => any): void;
    private _flush(done: () => any): void;
}

declare namespace FeedParser {
    type Type = "atom" | "rss" | "rdf";

    interface Options {
        normalize?: boolean;
        addmeta?: boolean;
        feedurl?: string;
        resume_saxerror?: boolean;
        MAX_BUFFER_LENGTH?: number;
    }

    interface Node {
        [key: string]: any;
    }

    interface Attrs {
        name: string;
        value: any;
        prefix: string;
        local: string;
        uri: string;
    }

    interface NS {
        [key: string]: string;
    }

    interface Image {
        url: string;
        title: string;
    }

    interface Meta {
        "#ns": NS[];
        "#type": Type;
        "#version": string;
        title: string;
        description: string;
        date: Date | null;
        pubdate: Date | null;
        link: string;
        xmlurl: string;
        author: string;
        language: string;
        image: Image;
        favicon: string;
        copyright: string;
        generator: string;
        categories: string[];
    }

    interface Item {
        title: string;
        description: string;
        summary: string;
        date: Date | null;
        pubdate: Date | null;
        link: string;
        origlink: string;
        author: string;
        guid: string;
        comments: string;
        image: Image;
        categories: string[];
        enclosures: string[];
        meta: Meta;
    }
}
