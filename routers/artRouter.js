var express = require("express")
var router =  express.Router()
const {artController} = require ("../controllers")

router.get("/article", artController.article)

module.exports = router