var express = require("express");
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
const port = 4000
const {authRouter} = require("./routers") 
const {artRouter} = require("./routers") 

app.use(bodyParser())
app.use(cors())

app.get("/", (req, res) => {
    res.send("ashiap")
})


app.use("/auth", authRouter)
app.use("/art", artRouter)

app.listen(port, console.log("Listening in port" + port))