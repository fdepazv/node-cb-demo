// Import the Express framework
const express = require('express')
const contentResolver = require('./controllers/contentResolver')
const circuitBreaker = require('./utils/circuitBreaker')

const app = express()
const port = 4000

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.get('/demo', async (req, res)=> {
  await contentResolver(req, res)
})

app.get('/status', async (req, res)=> {
  res.send(circuitBreaker.stats)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
