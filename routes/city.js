const express = require('express')
const router = express.Router()
const model = require('../models');
// const formjs =

router.get('/',(req,res)=>{
  model.City.findAll()
  .then(function(city){
    res.render('index', {

    })
    // res.send(city)
  })
})

// router.post('/',(req,res)=>{
//   model.Booked.create({
//     CityId:req.params.id,
//     CostumerId:req.body.first_name
//   })
//   .then((book)=>{
//     res.send(book)
//   })
// })
module.exports = router;
