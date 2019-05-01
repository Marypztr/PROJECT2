const express = require('express');
const router = express.Router()
const Contributions = require('../models/Contributions')


router.get("/userData", (req,res,next) => {
 
  Contributions.find()
  .then(data =>{ console.log({data})
  res.render("admin/contributions", {data})})
})

router.get("/createPost",(req,res,next) =>{
res.render("user/newPost")
})

router.post("/createPost",(req,res,next) =>{
  Contributions.create({...req.body})
  .then(newPost => {
    res.redirect("/userData")
  })
  .catch(err =>  
    res.send(err))
})

module.exports= router