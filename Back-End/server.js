const express = require('express')
const app = express()
require('dotenv/config')
const fs = require('fs')
const body_parser = require('body-parser')
const product = require('./src/routes/product')
const role = require('./src/routes/role')
const user = require('./src/routes/user')

const { connectToDB, getDB } = require('./src/configs/DB_config')
let db
var logger = require('morgan')

app.use(
    logger('common', {
        stream: fs.createWriteStream('./access.log', { flags: 'a' }),
    })
)
app.use(logger('dev'))
//--------
const PORT = 3000
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.use

app.use(`/`, product)
app.use(`/`, role)
app.use(`/`, user)

connectToDB((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`server is running on port : ${PORT}`)
            //` = backtick char
        })
    } else {
        console.log('can not connect to the db !')
    }
    db = getDB()
})
