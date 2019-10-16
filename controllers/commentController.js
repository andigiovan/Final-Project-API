const db = require("../database")

module.exports = {
    getComment: (req, res) =>{
        db.query(`select * from comments where articleid = ${req.query.articleid}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
    addComment: (req, res) => {
        db.query(`insert into comments values (0, "${req.body.username}" , "${req.body.comment}", ${req.body.articleid})`, (err, result) => {
            if (err) throw err
            res.send(result)
            console.log(result);
            
        })
    }, 
    
}