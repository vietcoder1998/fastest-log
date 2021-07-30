const fs = require('fs')
const path = require('path')

// Open one stream that will create flash
const log_stream = fs.createWriteStream(__dirname + '/debug.log', {flags: 'a'})
const log_stdout = function(v){process.stdout.write(v)}
const timeUTC = (function () {
    return new Date().toString()
})()

const type =  {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    ERROR: 'ERROR',
}

const debug = function (...args) {
    console.log(`\x1b[0m[\x1b[35m${type.DEBUG}\x1b[0m] ${timeUTC}`, ...args)
    stream_out(type.DEBUG, timeUTC, ...args)
}

const err = function (...args) {
    console.log(`\x1b[0m[\x1b[31m${type.ERROR}\x1b[0m] ${timeUTC}`, ...args)
    stream_out(type.ERROR,timeUTC, ...args)
}

const info = function (...args) {
    console.log(`\x1b[0m[\x1b[36m${type.INFO}\x1b[0m] ${timeUTC}`, ...args)
    stream_out(type.INFO, timeUTC, ...args)
}

const stream_out = function (type,timeUTC,  ...args) {
    log_stream.write('[' + type + ']')
    log_stream.write(timeUTC)
    log_stream.write(...args)
    log_stream.write('\n')
    fs.close(0, function() {log_stdout('.')})
}

const clean = function () {
    fs.truncate(path.join(__dirname, 'debug.log'), function(){log_stdout('delete_log_debug')})
    
}

module.exports = {
    debug,
    err,
    info,
    clean
}