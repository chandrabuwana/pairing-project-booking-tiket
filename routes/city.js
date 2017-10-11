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

router.get('/addcostumer/:id',(req,res)=>{
  model.City.findById(req.params.id)
  .then((dataCity)=>{
    model.Costumer.findAll()
    .then((dataCostumer)=>{
      res.render('addcostumer',{dataCity:dataCity,dataCostumer:dataCostumer})
    })
  })
})

router.post('/addcostumer/:id',(req,res)=>{
  model.Costumer.create({
    CityId:req.params.id,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    no_telp:req.body.no_telp,

  })
})
module.exports = router;
