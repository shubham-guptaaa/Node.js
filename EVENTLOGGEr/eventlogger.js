const fs = require("fs")
const os = require("os")

const EventEmitter = require("events")
const { log } = require("console")

class Logger extends EventEmitter{
    log(message){
        this.emit('message', {message})
    }
}

const logger = new Logger()
const logFile = '.eventlog.txt'

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`
    fs.appendFileSync(logFile, logMessage)
}

logger.on('message', logToFile)

setInterval(() =>{
    const memoryUsage = (os.freemem() / os.totalmem()) * 100
    logger.log(`Current Memory Usages: ${memoryUsage.toFixed(3)}`)
}, 3000)

logger.log('Application Started')
logger.log('Application event occured')