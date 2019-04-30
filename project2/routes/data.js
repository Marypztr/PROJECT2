const router = require("express").Router()
const passport = require("passport")
const contributions = require("../models/Contributions")


router.get("/data",(req,res,next)=>{
  Data.find()
  .then(allTheDatafromDB =>{
    res.render("data,{allTheDatafromDB}")
  })
})

.catch (err => console.log(err))


module.exports=router 