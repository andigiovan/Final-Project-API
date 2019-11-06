var express = require('express')
var router = express.Router()
const subsController = require('../controllers/subsController')
var upload = require('../helpers/multer')

router.post('/uploadimage', upload.single('browse_file'), subsController.inputSubs)
router.get('/getdata', subsController.getSubs)
router.patch('/completeapprove', subsController.isApproved)
router.delete('/deletesubs', subsController.deleteSubs)
module.exports = router