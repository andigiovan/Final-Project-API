const db = require('../database')

module.exports = { 
    getSubs: (req, res) => {
        db.query(`select * from subscribes`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    inputSubs: (req, res) => {
        db.query(`insert into subscribes (id, subs_name, subs_image, id_user) values (0, '${req.body.subs_name}', '${req.file.filename}', ${req.body.id_user})`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
    isApproved: (req, res) => {
        db.query(`update subscribes set isApproved = 1 where id_user = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Update Success!')
        })
    }, 
    deleteSubs: (req, res) => {
        var id = req.query.id
        db.query(`delete from subscribes where id = ${id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }, 
}