
const express = require('express')
const mysql = require('mysql')
const router = express.Router()


const connection = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "pumapolice",
    database: "lbta_mysql"
})


router.get("/",(req,res) => {
    res.send("hello from root")
})

router.get("/users",(req,res) => {
    connection.query("select * from Users",(err,rows,field)=>{
        if (err) {
            res.sendStatus(500)
            return
        }
        const users = rows.map((row)=> {
            return {firstName: row.first_name,lastName: row.last_name}
        })
        res.json(users)
    })
})

router.get("/user/:id",(req,res) => {

    connection.query("select * from Users where id = ?",[req.params.id],(err,rows,fields) => {
        if (err) {
            res.sendStatus(500)
            return
        }
        const users = rows.map((row)=> {
            return {firstName: row.first_name, lastName: row.last_name}
        })

        res.json(users)
    })
})


router.post("/user/create",(req,res)=> {
    const fname = req.body.firstName
    const lname = req.body.lastName
    connection.query("insert into Users (first_name,last_name) values (?,?)",[fname,lname],(err,rows,fields)=> {
        if (err) {
            console.log(err)
            console.log("my experiment went wrong")
            res.end()
            return
        }
        res.send("successfull saved")
    })
})

module.exports = router