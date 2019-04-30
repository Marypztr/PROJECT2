const express = require('express');
const router = express.Router()
const Contributions = require('../models/Contributions')


router.get("/userData", (req,res,next) => {
 
  Contributions.find()
  .then(data =>{ console.log({data})
  res.render("admin/contributions", {data})})
})

module.exports= router
