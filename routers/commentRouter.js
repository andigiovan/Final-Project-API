var express = require("express")
var router =  express.Router()
const {commentController} = require ("../controllers")

router.get("/getcomment", commentController.getComment)
router.post("/addcomment", commentController.addComment)
router.patch("/editcomment", commentController.editComment)
router.patch("/updatecomment", commentController.updateComment)
router.delete("/deletecomment/:id", commentController.deleteComment)


module.exports = router

