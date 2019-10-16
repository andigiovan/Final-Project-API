var express = require("express");
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
const port = 4500
const {authRouter} = require("./routers") 
const {artRouter} = require("./routers") 
const {subsRouter} = require("./routers") 
const {commentRouter} = require("./routers") 

app.use(bodyParser())
app.use(cors())

app.get("/", (req, res) => {
    res.send("ashiap")
})


app.use("/auth", authRouter)
app.use("/art", artRouter)
app.use("/comment", commentRouter)
app.use('/files', express.static('uploads'))
app.use(subsRouter)


app.listen(port, console.log("Listening in port " + port))