module.exports = {
  cb: {
    timeout: 2000, // If our function takes longer than 6 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 20000, // After 20 seconds, try again.
  },
}
