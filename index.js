
// loads .env file contents into process.env by default

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Router/router')
require('./DB/connection')

// creating a express server

const pfServer = express()

pfServer.use(cors())
// parse json
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`pfserver started at PORT:${PORT} and waiting for the client request....`);
})

pfServer.get('/',(req,res)=>{
    res.send('<h1>Project-Fair Sever started and waiting for client request....</h1>')
})

// pfServer.post('/',(req,res)=>{
//     res.send('post request')
// })

// pfServer.put('/',(req,res)=>{
//     res.send('put request')
// })