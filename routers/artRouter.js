var express = require("express")
var router =  express.Router()
const {artController} = require ("../controllers")

router.get("/article", artController.article)
router.get("/figurelist", artController.figureList)
router.get("/premiumlist", artController.premiumList)
router.post("/userarticle", artController.userArticle)
router.get("/figuredetail/:id", artController.showDetail)
router.get("/premiumfiguredetail/:id", artController.premiumDetail)
router.get("/userarticledetail/:id", artController.userArticleDetail)
router.get("/getuserarticle", artController.getUserArticle)
module.exports = router