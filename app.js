const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const router = require("./routes/user.js")


const connection = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bd58cb7b6cf66b",
    password: "6ff92269",
    database: "heroku_0497222a6793cbd"
})

app.use(morgan("short"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)


const PORT = process.env.PORT || 3003
app.listen(PORT,() => {
    console.log("Server is app and running...AK")
})

