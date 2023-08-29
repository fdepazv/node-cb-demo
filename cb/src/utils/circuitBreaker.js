const CircuitBreaker = require('opossum')
const logger = require('./logger')

const getCustomContent = require('../services/getCustomContent')
const getDefaultContent = require('../services/getDefaultContent')
const {cb} = require('../config')

// Regular function executed when the circuit is closed
const circuitBreaker = new CircuitBreaker(getCustomContent, {
  ...cb
})

// When the circuit is open, this function will be triggered
circuitBreaker.fallback(getDefaultContent)

// Logs to track the status of the API
circuitBreaker.on('success', () => logger.info('Call to the `DEMO` service was successful'))
circuitBreaker.on('failure', (err) => logger.error(err))
circuitBreaker.on('fallback', () =>
  logger.warn('Fallback function triggered. Returning default response')
)
circuitBreaker.on('timeout', () => logger.error('Demo service timed out'))
circuitBreaker.on('open', () => logger.warn('Circuit is opened'))

module.exports = circuitBreaker
