const mongoose = require('mongoose')
const db_url = process.env.DB_CON_STRING
let dbConnection

module.exports = {
    connectToDB: (cb) => {
        mongoose
            .connect(process.env.DB_CON_STRING)
            .then(() => {
                return cb()
            })
            .catch((err) => {
                console.log(err)
                return cb(err)
            })
    },
    getDB: () => dbConnection,
}
