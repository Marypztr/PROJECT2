const express = require('express');
const router = express.Router()
const Contributions = require('../models/Contributions')
const User = require('../models/User')


router.get("/admin/profile", (req, res, next)=>res.render("admin/profile"))

router.get('/admin/contributions', (req, res, next) => {
  Contributions.find()
  .then(contributions => {
    res.render('admin/contributions', { contributions })
  })
  .catch(err => next(err))
}) 

router.post('/admin/contributions/create', (req, res, next) => {
  Contributions.create({ ...req.body })
    .then(() => res.redirect('/admin/contributions'))
    .catch(err => next(err))
})

router.get('/admin/contributions/delete/:id', (req,res,next) => {
  const { id } = req.params
  Contributions.findByIdAndDelete(id)
  .then(() => res.redirect('/admin/contributions'))
    .catch(err => next(err))
})

router.get('/admin/users', (req, res, next) => {
  User.find()
    .then(users => {
      res.render('admin/users', { users })
    })
    .catch(err => next(err))
})


module.exports = router