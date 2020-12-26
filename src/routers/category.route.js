const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer()
const categoryController = require('../controllers/CategoryController')

router.post('/',upload.single('images'),categoryController.upload)

module.exports = router