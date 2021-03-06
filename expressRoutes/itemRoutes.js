const express = require('express')
const itemRoutes = express.Router()

// Require Item model in our routes module
const Item = require('../models/Item')

// Defined store route
itemRoutes.route('/add').post((req, res) => {
  const item = new Item(req.body)
  item.save().then(item => {
      res.status(200).json({'item': 'Item added successfully'})
    }).catch(err => {
      res.status(400).send('Unable to update the database')
    })
})

// Defined get data(index or listing) route
itemRoutes.route('/').get((req, res) => {
  Item.find((err, items) => {
    if (err) {
      console.log(err)
    } else {
      res.json(items)
    }
  })
})

// Defined edit route
itemRoutes.route('/edit/:id').get((req, res) => {
  const id = req.params.id
  Item.findById(id, (err, item) => {
    res.json(item)
  })
})

//  Defined update route
itemRoutes.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if (!item) {
      return next(new Error('Could not load Document'))
    } else {
      item.name = req.body.name
      item.lastname = req.body.lastname
      item.email = req.body.email

      item.save().then(item => {
        res.json('Update complete')
      }).catch(err => {
        res.status(400).send('Unable to update the database')
      })
    }
  })
})

// Defined delete | remove | destroy route
itemRoutes.route('/delete/:id').get((req, res) => {
  Item.findByIdAndRemove({_id: req.params.id}, (err, item) => {
    if (err) {
      res.json(err)
    } else {
      res.json('Successfully removed')
    }
  })
})

module.exports = itemRoutes