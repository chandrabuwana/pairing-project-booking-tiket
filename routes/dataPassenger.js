const express = require('express')
const router = express.Router()
const Models = require('../models')

router.get('/:CityId/:CostumerId', function(req, res){
  Models.Booked.findAll({
    include: [
      {model: Models.City},
      {model: Models.Costumer}
    ],
    where: {
      CityId: req.params.CityId,
      CostumerId: req.params.CostumerId
    }
  })
  .then(function(book){
    res.render('dataPassenger', {
      data: book[0],
      title: 'Data Passenger'
    })
    // res.send(book)
  })
})

router.get('/success/:CityId/:CostumerId', function(req, res){
  Models.Booked.findAll({
    include: [
      {model: Models.City},
      {model: Models.Costumer}
    ],
    where: {
      CityId: req.params.CityId,
      CostumerId: req.params.CostumerId
    }
  })
  .then(function(book){
    console.log(book[0].mailer)
    book[0].mailer(book[0].City.city, book[0].date_departure, book[0].Costumer.first_name, book[0].Costumer.email, book[0].Costumer.no_telp, book[0].Costumer.no_booking)
    res.render('success', {
      title: 'Success'
    })
  })
})

module.exports = router
