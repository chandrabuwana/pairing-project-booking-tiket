const express=require('express')
const router=express.Router()
const model=require('../models');

router.get('/',(req,res)=>{
  model.City.findAll()
  .then(dataCity=>{
    // res.send(dataCity)
    res.render('city',{dataCity:dataCity})
  })
})

router.post('/',(req,res)=>{
  model.Booked.create({
    CityId:req.params.id,
    CostumerId:req.body.first_name
  })
  .then((book)=>{
    res.send(book)
  })
})
module.exports = router;
