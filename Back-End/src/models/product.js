const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    countInStock: Number,
})
const Product = mongoose.model('Product', productSchema)

module.exports = Product
