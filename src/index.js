const express = require("express")
const config = require("./config")
const cors = require("cors")
const router = require("./routers")
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use('/uploads',express.static(path.join(__dirname,'../public/uploads')))
app.use(router)
app.listen(config.port,(err)=>{
    if(!err) console.log(`appliacation is runnig on port ${config.port}`, );
})