const db = require("../database")

module.exports = {
    article: (req, res) =>{
        db.query(`select * from articles`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }
}