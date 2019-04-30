const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')


router.get("/admin", (req, res, next)=> res.render("auth/profile"))

router.get('/auth/profile', (req,res,next)=>{
  Post.find()
  .then(post =>{
    res.render('/auth/profile', {post})
  })
  .cath(err => next(err))
})

router.post('/auth/profile/create', (req,res,next)=>{
  Post.create({...req.body})
  .then(()=> res.render('auth/profile/post'))
  .cath(err => next(err))
})

router.get('/auth/profile/delete/:id',(req,res,next)=>{
  const {id} = req.param
  Post.findByIdDelete(id)
  .then(()=> res.redirect('auth/profile/post'))
  .cath(err => next(err))
})

router.get('/admin/user',(req,res,next)=>{
  User.find()
  .then(users =>{
    res.render('/admin/user',({users}))
  })
  .cath(err => next(err))
})

module.exports = router