const {Router} = require('express')
const { uploadController } = require('../controllers')
const upload = require('../services/upload.service')

const router = Router()
router.post('/',upload.single('image'), uploadController.uploadImage)


module.exports = router