const express = require('express')
const router = express.Router()
const Role = require('../models/role')
const User = require('../models/user')

require('dotenv/config')

User.init()

router.post(`/user`, async (request, response) => {
    const newUser = new User({
        f_name: request.body.f_name,
        l_name: request.body.l_name,
        email: request.body.email,
        password: request.body.password,
        phone: request.body.phone,
        age: request.body.age,
        country: request.body.country,
        role_id: request.body.role,
    })

    try {
        await newUser.save()
        console.log('Product saved successfully')
        response.send(newUser)
    } catch (err) {
        console.error('Error saving product:', err)
    }
})

router.get('/user', (request, response) => {
    User.find()
        .then((data) => response.json(data))
        .catch((error) => response.json(error))
})

router.get('/user/:id', (req, res) => {
    const UsertId = req.params.id
    User.findById(UsertId)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.put('/user/:id', (req, res) => {
    const updated_user = req.body
    User.findByIdAndUpdate(req.params.id, updated_user, this.options)
        .then((data) => res.json('updated successfully ..'))
        .catch((error) => res.json(error))
})

router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((data) => res.json('deleted successfully ..'))
        .catch((error) => res.json(error))
})
module.exports = router
