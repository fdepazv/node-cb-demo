const circuitBreaker = require('../utils/circuitBreaker')

/**
 * Handle the content response, protected by CB
 * @param {Object} req - original request
 * @param {Object} res - original response
 * @returns 
 */
const contentResolver = async (req, res) => {
  // Execute the circuit breaker feature
  const proxyResponse = await circuitBreaker.fire(req, res)

  return {
    ...proxyResponse,
    resHeaders: {
      'x-circuit-state': circuitBreaker.opened ? 'opened' : 'closed'
    }
  }
}

module.exports = contentResolver
