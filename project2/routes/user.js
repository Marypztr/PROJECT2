
const express = require('express');
const router = express.Router()
const Contributions = require('../models/Contributions')
const User = require("../models/User")


router.get("/userData", (req, res, next) => {
  Contributions.find()
    .populate('owner')
    .then(data => {
      console.log({ data })
      res.render("admin/contributions", { data })
    })
})

router.get("/createPost", (req, res, next) => {
  res.render("user/newPost")
})

router.post("/createPost", (req, res, next) => {
  let validation
  if (req.user.role === 'ADMIN') {
    validation = true
  } else {
    validation = false
  }
  Contributions.create({ ...req.body, validation })
    .then(newPost => {
      User.findByIdAndUpdate(req.user._id,{$push:{contributions:newPost}},{new:true})
      .then(()=>{
        res.redirect("/auth/profile")
      })
     .catch(err=> res.send(err))
    })
    .catch(err =>
      res.send(err))
})

router.get('/user/newPost/delete/:id', (req,res,next) => {
  const { id } = req.params
  console.log(id)
  Contributions.findByIdAndDelete(id)
  .then(() => res.redirect('/auth/profile'))
    .catch(err => next(err))
})
module.exports = router