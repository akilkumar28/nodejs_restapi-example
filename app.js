const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const router = require("./routes/user.js")


const connection = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "pumapolice",
    database: "lbta_mysql"
})

app.use(morgan("short"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)



app.listen(3003,() => {
    console.log("Server is app and running...AK")
})

