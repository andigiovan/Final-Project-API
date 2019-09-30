const db = require("../database")

module.exports = {
    article: (req, res) =>{
        db.query(`select * from articles`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    figureList: (req, res) =>{
        db.query(`select * from figurelist`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    artDetail: (req, res) => {
        db.query(`insert into articles values (0, "name", "${req.body.content}", "image")`, (err, result) => {
            if (err) throw err
            res.send(result)
            console.log(result);
            
        })
    }, 
    showDetail: (req, res) => {
        let id = req.params.id
        db.query(`select * from articles where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }
    
}