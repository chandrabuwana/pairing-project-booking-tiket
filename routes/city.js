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

// router.get('/add',(req,res)=>{
//   model.Cit
// })
// router.get('/add',(req,res)=>{
//   // res.send('masuk')
//   model.Costumer.findAll({
//     where:{
//       id:req.params.id}
//       .then(dataCity=>{
//         res.render('/add',{dataCity:dataCity})
//     })
//     model.Costumer.findById({
//     })
//   })
// })


// router.post('/add',(req,res)=>{
// //   // res.send('masuk')
//     model.Costumer.create({
//     first_name:req.body.first_name,
//     last_name:req.body.last_name,
//     email:req.body.email,
//     no_telp:req.body.no_telp,
//     no_booking:req.body.no_booking
//   })
//   .then(()=>{
//     res.redirect('/add')
//   })
// })


module.exports = router;
