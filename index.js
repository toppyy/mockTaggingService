const express = require('express')
const app = express()

const tags = require('./mock-tags')


const handleRequest = (request, response) => {

    const service = request.params.service
    const serviceTags = tags[service] 

    response.send( serviceTags ? JSON.stringify(serviceTags)  : tags.default )
}

app.get('/tag/:service*', handleRequest)
app.post('/tag/:service*', handleRequest)



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})