const express = require("express")
const router = express.Router()
const uploadRouter = require('./upload.router')

router.use('/upload',uploadRouter)

module.exports = router