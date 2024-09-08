const mongoose = require('mongoose')
const schema = mongoose.Schema;

const productSchema = new schema({
    name: String,
    image: String,
    price: Number,
    countInStock: Number,
})
const Product = mongoose.model('Product', productSchema)

module.exports = Product;