var express = require("express")
var router =  express.Router()
const {authController} = require ("../controllers")

router.get("/login", authController.login)
router.get("/getdata", authController.getData)
router.get("/getrole", authController.getRole)
router.post("/register", authController.register)
router.patch("/updaterole", authController.updateRole)


module.exports = router