const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer()
const homeController = require('../controllers/HomeController')

//upload.none() nhận được form-data trong postman

// router.post('/',upload.none(),homeController.insert)

// router.post('/',upload.none(),homeController.delete)


router.post('/',upload.none(),homeController.getData)

module.exports = router