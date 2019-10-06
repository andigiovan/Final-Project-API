const db = require("../database")

module.exports = {
    getData: (req, res) => {
        db.query(`select * from users where username = "${req.query.username}" and email = "${req.query.email}"`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
    getRole: (req, res) => {
        db.query(`select * from users where role = "${req.query.role}" and id = "${req.query.id}"`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    login: (req, res) => {
        db.query(`select * from users where username = "${req.query.username}" and password ="${req.query.password}"`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
    register: (req, res) => {
        db.query(`insert into users(username, password, email) values ("${req.body.username}","${req.body.password}","${req.body.email}")`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    updateRole: (req, res) => {
        db.query(`update users set role = "premium" where id = ${req.body.id}`, (err, result) => {
            
            if (err) throw err
            res.send(result)
        })
        
    }
    

}