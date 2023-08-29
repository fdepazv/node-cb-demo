
const simulateFailure = (ms=3000) => new Promise(r => setTimeout(r, ms));

const handleRequest = async (id)=> {
  switch(id){
    case '1000': 
      await simulateFailure()
      break
    case '2000':
      throw new Error('Some error...')
    case '9000':
        let index = 0
        while(index < parseInt(id)*100){
          console.log(`${index} looping... `)
          index++
        }
    default:
        const message = `Returning data for id: '${id}'`
        return { status: "ok", message}
  }
}

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const {query: {id}} = request
    
    response = await handleRequest(id)

    reply.send(response)
  })
}
