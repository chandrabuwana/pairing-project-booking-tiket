const express = require('express')
const router = express.Router()
const Models = require('../models')
const helper = require('../helpers/dataperson/nobooking')

router.get('/city/:id', function(req, res){
  Models.City.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(city){
    Models.Seat.findAll({
      order: [
        ['id', 'ASC']
      ]
    })
    .then(function(seat){
      res.render('dataperson', {
        data: city,
        dataSeat: seat,
        dataErr: null,
        title: 'Data Person'
      })
    })
  })
})

router.post('/city/:id', function(req, res){
  Models.Costumer.findAll()
  .then(function(cost){
    Models.Costumer.create({
      first_name: `${req.body.fn}`,
      last_name: `${req.body.ln}`,
      email: `${req.body.email}`,
      no_telp: `${req.body.phone}`,
      no_booking: helper(),
      cityID: req.params.id,
      seatID: req.body.seatID
    })
    .then(function(){
      Models.Costumer.findAll({
        where: {
          cityID: req.params.id
        }
      })
      .then(function(cust){
        Models.Booked.update({
          CostumerId: `${cust[0].id}`
        },
        {
          where: {
            CityId: req.params.id
          }
        })
        .then(function(book){
          Models.Seat.update({
            status: 'Not Available'
          },
          {
            where: {
              id: req.body.seatID
            }
          })
          .then(function(){
            res.redirect(`/datapassenger/${cust[0].cityID}/${cust[0].id}`)
          })
        })
      })
    })
    .catch(function(err){
      Models.City.findAll({
        where: {
          id: req.params.id
        }
      })
      .then(function(city){
        Models.Seat.findAll()
        .then(function(seat){
          res.render('dataperson', {
            data: city,
            dataSeat: seat,
            dataErr: err,
            title: 'Data Person'
          })
        })
      })
    })
  })
})

// router.get('/:id/datapassenger', function(req, res){
//
// })

module.exports = router
