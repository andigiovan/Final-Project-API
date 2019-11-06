var express = require("express")
var router =  express.Router()
const {premiumCommentController} = require ("../controllers")

router.get("/getcomment", premiumCommentController.getComment)
router.post("/addcomment", premiumCommentController.addComment)
router.patch("/editcomment", premiumCommentController.editComment)
router.patch("/updatecomment", premiumCommentController.updateComment)
router.delete("/deletecomment/:id", premiumCommentController.deleteComment)


module.exports = router