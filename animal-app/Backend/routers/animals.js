const express = require('express')
const router = express.Router()

const animal = require('../models/animal')
const Animal = require('../models/animal')

// to get all data
router.get('/', async(req,res) => {
    animal.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const animals = await Animal.find()
    //     res.json(animals)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-animal/:id', async(req,res) => { //ubah
    try {
        const animal = await Animal.findById(req.params.id)
        res.json(animal)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-animal', async(req,res) => { //ubah
    try {
        const animal = new Animal({
            name : req.body.name,
            species : req.body.species,
            age : req.body.age,
            adopted : req.body.adopted
        })

        const data = await animal.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-animal/:id', async(req,res) => { //ubah patch--> put
    try {
        const animal = await Animal.findById(req.params.id)

        if (req.body.name != null) {
            animal.name = req.body.name
        }
        if (req.body.species != null) {
            animal.species = req.body.species
        }
        if (req.body.age != null) {
            animal.age = req.body.age
        }
        if (req.body.adopted != null) {
            animal.adopted = req.body.adopted
        }

        const updated = await animal.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-animal/:id', async(req,res) => { //ubah
    try {
        const animal = await Animal.findById(req.params.id)
        animal.remove()
        res.json({ message : 'animal data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router