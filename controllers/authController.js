const db = require("../database")
const nodemailer = require("nodemailer")
const fs = require("fs")

let transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: 'andigiovan99@gmail.com',
        pass: 'ovhulkcpqsfexnpy'
    },
    tls: {
        rejectUnauthorized: false
    }
})

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
        db.query(`insert into users(username, password, email, role, isVerified) values ("${req.body.username}","${req.body.password}","${req.body.email}", "free", 0)`, (err, result) => {
            if (err) throw err
            let mailOptions = {
                from: 'ParaTokoh <paratokoh@gmail.com>',
                to: req.body.email,
                subject: 'Verify your account',
                html: `<p>Click this <a href='http://localhost:4500/auth/verify?username=${req.body.username}'>link</a> to verify your account</p>`
            }
            
            transporter.sendMail(mailOptions, (err3, info) => {
                if (err3) throw err3
            })
            res.send(result)
        })
    },
    updateRole: (req, res) => {
        db.query(`update users set role = "premium" where id = ${req.body.id}`, (err, result) => {
            
            if (err) throw err
            res.send(result)
        })
        
    },
    
    verify: (req, res) => {
        let sql = `update users set isVerified = 1 where username = '${req.query.username}'`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Akun Anda telah terverifikasi')
        })
    },
    
    
    

}