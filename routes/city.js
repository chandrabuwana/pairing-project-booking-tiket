const express = require('express')
const router = express.Router()
const model = require('../models');
// const formjs =

router.get('/',(req,res)=>{
  model.City.findAll()
  .then(function(city){
    res.render('index', {

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 530fe588749715ad3beab3acd5f4609ab58b3527
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
<<<<<<< HEAD
=======
=======

>>>>>>> 530fe588749715ad3beab3acd5f4609ab58b3527

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
<<<<<<< HEAD
>>>>>>> 28df034c7734a5d300829c73d43ec512e163ee0f
=======

>>>>>>> 530fe588749715ad3beab3acd5f4609ab58b3527
module.exports = router;
