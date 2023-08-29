const fetch = require('node-fetch')
const { STATUS_CODES } = require('http')

const HOST = 'localhost:3000'

const getCustomContent = async (req, res) => {

    const { url } = req 
    const requestURL = `http://${HOST}${url}`
  
    const response = await fetch(requestURL, {
        method: 'GET'
    })

    if (response.status >= 500) {
        const err = new Error(
          `Error calling the 'demo' service: ${response.status} ${
            STATUS_CODES[response.status]
          }`
        )
        err.name = STATUS_CODES[response.status]
        err.status = response.status
        throw err
    }

    const responseJSON = await response.json()

  res.send(responseJSON)
}

module.exports = getCustomContent
