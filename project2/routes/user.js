
const express = require('express');
const router = express.Router()
const Contributions = require('../models/Contributions')


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
      res.redirect("/userData")
    })
    .catch(err =>
      res.send(err))
})

module.exports = router