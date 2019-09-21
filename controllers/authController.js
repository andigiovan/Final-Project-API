const db = require("../database")

module.exports = {
    getData: (req, res) => {
        db.query(`select * from users where username = "${req.query.username}" and email = "${req.query.email}"`, (err, result) => {
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
    }

}