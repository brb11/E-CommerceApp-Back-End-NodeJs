const express = require('express')
const router = express.Router()
const Product = require('../models/product')

require('dotenv/config')

Product.init()

router.post(`/product`, async (request, response) => {
    const newProduct = new Product({
        name: 'Sample Product',
        image: 'http://example.com/image.jpg',
        price: 100,
        countInStock: 50,
    })

    try {
        await newProduct.save()
        console.log('Product saved successfully')
        response.send(newProduct)
    } catch (err) {
        console.error('Error saving product:', err)
    }
})

router.get('/product', (request, response) => {
    Product.find()
        .then((data) => response.json(data))
        .catch((error) => response.json(error))
})

router.get('/product/:id', (req, res) => {
    const ProductId = req.params.id
    Product.findById(ProductId)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.put('/product/:id', (req, res) => {
    const updated_product = req.body
    Product.findByIdAndUpdate(req.params.id, updated_product, this.options)
        .then((data) => res.json('updated successfully ..'))
        .catch((error) => res.json(error))
})

router.delete('/product/:id', (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id)
        .then((data) => res.json('deleted successfully ..'))
        .catch((error) => res.json(error))
})
module.exports = router
