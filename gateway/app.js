const express = require('express')
const expressProxy = require('express-http-proxy')

const app = express()


app.use('/user', expressProxy('http://localhost:3001'))       // user service
app.use('/captain', expressProxy('http://localhost:3002'))    // captain service 
app.use('/ride', expressProxy('http://localhost:3003'))       // ride service


app.listen(3000, () => {
    console.log('Gateway server listening on port 3000')
})