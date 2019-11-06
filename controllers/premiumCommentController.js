const db = require("../database")

module.exports = {
    getComment: (req, res) =>{
        db.query(`select * from premiumcomments where articleid = ${req.query.articleid} order by created_at desc`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
    addComment: (req, res) => {
        db.query(`insert into premiumcomments values (0, "${req.body.username}" , "${req.body.comment}", ${req.body.articleid}, "${req.body.created_at}", "" )`, (err, result) => {
            if (err) throw err
            res.send(result)
            console.log(result);
            
        })
    },
    deleteComment: (req, res) => {
        var id = req.params.id
        db.query(`delete from premiumcomments where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    editComment: (req, res) => {
        db.query(`update premiumcomments set comment = '${req.body.comment}' where id = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Update success')
        })
    },
    updateComment: (req, res) => {
        db.query(`update premiumcomments set edited = "(edited)" where id = ${req.body.id}`, (err, result) => {
            
            if (err) throw err
            res.send(result)
        })
        
    }
    
}