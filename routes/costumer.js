const express=require('express')
const router=express.Router()
const model=require('../models');

router.get('/',(req,res)=>{
  model.Costumer.findAll()
  .then(dataCostumer=>{
    // res.send(dataCostumer)
    res.render('costumer',{dataCostumer:dataCostumer})
  })
})

router.get('/add',(req,res)=>{
  model.City.findById(req.params.id)
  .then(dataCity=>{
    model.Costumer.findAll()
    .then(dataCostumer=>{
      res.render('addcostumer',{dataCity:dataCity,dataCostumer:dataCostumer})
    })
  })
})

router.post('/add',(req,res)=>{
  res.send('add')
  // model.Costumer.create({
  //   first_name:req.body.first_name,
  //   last_name:req.body.last_name,
  //   email:req.body.email,
  //   no_telp:req.body.no_telp,
  //   no_booking:req.body.no_booking
  // })
  // .then(()=>{
  //   res.redirect('/costumer')
  // })
})





module.exports = router;
