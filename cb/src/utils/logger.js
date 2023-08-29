const winston = require('winston')
const { format: { combine, colorize, timestamp, align, printf } } = winston

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json()
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: combine(
        colorize(),
        timestamp(),
        align(),
        printf((info) => {
          const {
            timestamp, level, message, ...args
          } = info;
    
          const ts = timestamp.slice(0, 19).replace('T', ' ');
          return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
        }),
      )
  }))
}

module.exports = logger