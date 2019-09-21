var mysql = require("mysql")

const db = mysql.createConnection({
    user: "root",
    password: "password",
    database: "jc10_wiki",
    host: "localhost"

})

module.exports = db