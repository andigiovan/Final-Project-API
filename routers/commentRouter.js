var express = require("express")
var router =  express.Router()
const {commentController} = require ("../controllers")

router.get("/getcomment", commentController.getComment)
router.post("/addcomment", commentController.addComment)


module.exports = router

