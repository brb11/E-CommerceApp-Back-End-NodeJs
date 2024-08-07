const express = require('express')
const mongoose = require('mongoose')
const router = express()
const DB = require('../models/product')
const Product = require('../models/product')

require('dotenv/config')
//morgan logger :

const api = process.env.api_url_v1

router.post(`/product`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        countInStock: req.body.countInStock,
    })
    product
        .save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false,
            })
        })
})

module.exports = router
