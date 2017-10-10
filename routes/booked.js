const express=require('express')
const router=express.Router()
const model=require('../models');

router.get('/',(req,res)=>{
  model.City.findById()
  .then(dataCity=>{
    res.send(dataCity)
  })
})

module.exports = router;
