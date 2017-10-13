const express = require('express')
const router = express.Router()
const Models = require('../models')

router.get('/', function(req, res){
  Models.City.findAll()
  .then(function(city){
    res.render('index', {
      data: city,
      title: 'Naik Gratis Turun Bayar'
    })
  })
})

router.post('/', function(req, res){
  Models.Booked.create({
    CityId: req.body.cityDestination,
    date_departure: req.body.date
  })
  .then(function(book){
    res.redirect(`/dataperson/city/${book.CityId}`)
  })
})

module.exports = router
