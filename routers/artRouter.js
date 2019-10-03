var express = require("express")
var router =  express.Router()
const {artController} = require ("../controllers")

router.get("/article", artController.article)
router.get("/figurelist", artController.figureList)
router.get("/premiumlist", artController.premiumList)
router.post("/articledetail", artController.artDetail)
router.get("/figuredetail/:id", artController.showDetail)
router.get("/premiumfiguredetail/:id", artController.premiumDetail)

module.exports = router