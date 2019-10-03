var express = require('express')
var router = express.Router()
const subsController = require('../controllers/subsController')
var upload = require('../helpers/multer')

router.get('/getdata', subsController.getSubs)
router.post('/uploadimage', upload.single('browse_file'), subsController.inputSubs)
module.exports = router