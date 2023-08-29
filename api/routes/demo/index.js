const { error } = require("console");


const simulateFailure = (ms=3000) => new Promise(r => setTimeout(r, ms));


module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const {query: {id}} = request
    const message = `Returning data for id: '${id}'`

    if(id == 1000) {
      await simulateFailure()
    }

    switch(id){
      case '1000': 
        await simulateFailure()
        break
      case '2000':
        throw new Error('Some error...')
    }


    reply.code(200)
    reply.send({ status: "ok", message})
  })
}
