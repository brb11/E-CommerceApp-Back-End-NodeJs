const { MongoClient } = require('mongodb')
let dbConnection
const db_url = process.env.DB_CON_STRING

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect(db_url)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch((err) => {
                console.log(err)
                return cb(err)
            })
    },
    getDB: () => dbConnection,
}
