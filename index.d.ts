// Type definitions for body-parser 1.19
// Project: https://github.com/expressjs/body-parser
// Definitions by: tranduy
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace log {
    type Type = {
        DEBUG: 'DEBUG',
        INFO: 'INFO',
        ERR: 'ERR'
    }

    interface StdoutOptions {
        type: Type,
        timeUTC: string,
        args: string[]
    }
    function err (...args: string[] ): void
    function info (...args: string[] ): void
    function debug (...args: string[] ): void
    function log_stdout({type, timeUTC, ...args}: StdoutOptions): void
    function clean (): void
}