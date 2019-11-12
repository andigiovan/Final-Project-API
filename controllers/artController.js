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
    premiumList: (req, res) =>{
        db.query(`select * from tokohmusik`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    showDetail: (req, res) => {
        let id = req.params.id
        db.query(`select * from articles where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    premiumDetail: (req, res) => {
        let id = req.params.id
        db.query(`select * from tokohmusik where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    userArticleDetail: (req, res) => {
        let id = req.params.id
        db.query(`select * from userlist where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    
    userArticle: (req, res) => {
        db.query(`insert into userlist values (0, "${req.body.name}", "${req.body.subtitle}", "${req.body.content}", "${req.body.image}", "${req.body.image_2}", "${req.body.born}", "${req.body.dead}", "${req.body.nationality}", "${req.body.era}", "${req.body.user_id}")`, (err, result) => {
            if (err) throw err
            res.send(result)
            console.log(result);
            
        })
    }, 
    getUserArticle: (req, res) =>{
        console.log(req.query);
        
        db.query(`select * from userlist where user_id = ${req.query.user_id}`, 
        (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    deleteUserArticle: (req, res) => {
        var id = req.params.id
        db.query(`delete from userlist where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    
    
}
    
    