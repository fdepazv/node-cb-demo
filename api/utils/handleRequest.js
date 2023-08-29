const simulateFailure = (ms=3000) => new Promise(r => setTimeout(r, ms));

const handleRequest = async (idString)=> {
    const id = parseInt(idString)
  
    if(isNaN(id)){
      const message = `ID: '${idString}' is not a number`
      return { status: "error", message}
    }
  
    switch(id){
      case 1000: 
        await simulateFailure()
        break
      case 2000:
        throw new Error('Some error...')
      case 9000:
          let index = 0
          while(index < id *100){
            console.log(`${index} looping... `)
            index++
          }
      default:
          const message = `Returning data for id: '${id}'`
          return { status: "ok", message}
    }
  }
module.exports = handleRequest