const handleRequest = require('../../utils/handleRequest')

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const {query: {id}} = request
    
    response = await handleRequest(id)

    reply.send(response)
  })
}
