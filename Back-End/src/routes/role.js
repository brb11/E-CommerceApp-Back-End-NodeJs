const express = require('express')
const router = express.Router()
const Role = require('../models/role')
require('dotenv/config')

Role.init()


router.post(`/role`, async (request, response) => {
    const newRole = new Role({
        name: request.body.name
    })

    try {
        await newRole.save()
        console.log('Role saved successfully')
        response.send(newRole)
    } catch (err) {
        console.error('Error saving role:', err)
    }
})

router.get('/role', (request, response) => {
    Role.find()
        .then((data) => response.json(data))
        .catch((error) => response.json(error))
})

router.get('/role/:id', (req, res) => {
    const RoleId = req.params.id
    Role.findById(RoleId)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.put('/role/:id', (req, res) => {
    const updated_id = req.body
    Role.findByIdAndUpdate(req.params.id, updated_id, this.options)
        .then((data) => res.json('updated successfully ..'))
        .catch((error) => res.json(error))
})

router.delete('/role/:id', (req, res) => {
    const id = req.params.id
    Role.findByIdAndDelete(id)
        .then((data) => res.json('deleted successfully ..'))
        .catch((error) => res.json(error))
})

module.exports = router
