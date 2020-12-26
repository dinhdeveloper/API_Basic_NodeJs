const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer()
const uploadFiles = require('../models/upload')
const categoryController = require('../controllers/CategoryController')

// router.post('/',upload.single('images'),categoryController.uploadFiles)

router.post('/',uploadFiles.upload.single('images'),categoryController.upload)

module.exports = router