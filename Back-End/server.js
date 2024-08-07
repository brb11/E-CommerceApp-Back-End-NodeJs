const express = require('express')
const app = express()
require('dotenv/config')
const fs = require('fs')
const body_parser = require('body-parser')
const product = require('./src/routes/Product')
const { connectToDB, getDB } = require('./src/configs/DB_config')
const DB = require('./src/models/product')
let db
var logger = require('morgan')

app.use(
    logger('common', {
        stream: fs.createWriteStream('./access.log', { flags: 'a' }),
    })
)
app.use(logger('dev'))
//--------
const api = process.env.api_url_v1
const PORT = 3000
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.use

app.use(`${api}/`, product)

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
