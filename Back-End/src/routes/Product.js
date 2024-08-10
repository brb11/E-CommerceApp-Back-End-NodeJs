const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Product = require('../models/product')


require('dotenv/config')

Product.init();
router.post(`/product`, async (request, response) => {
    const newProduct = new Product({
        name: 'Sample Product',
        image: 'http://example.com/image.jpg',
        price: 100,
        countInStock: 50
    });

    try {
        await newProduct.save();
        console.log('Product saved successfully');
        response.send(newProduct);
    } catch (err) {
        console.error('Error saving product:', err);
    }
        
})

router.get('/product', (request, response) => {
    Product.find()
    .then(data => response.json(data))
    .catch(error => response.json(error))
});
module.exports = router
