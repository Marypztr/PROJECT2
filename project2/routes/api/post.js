const express = require('express');
const mongoose = require('mongoose');
const Contributions = require('../../models/Contributions')
const { ObjectId } = mongoose.Types;
const router = express.Router();


// Create
router.post('/', (req, res, next)=> {
  const {user} = req.body
  Contributions.create({
    owner: ObjectId(user)
  })
  .then(Contributions => res.send(Contributions))
  .catch(err => console.log(err));
})
// Read
router.get('/', (req, res, next)=>{
  Contributions.find()
  .then(Contributions => res.send(Contributions))
  .catch(err => console.log(err))
})
//Update
router.put('/:id', (req, res, next)=>{
  const {id} = req.params
  Contributions.find(id)
  .then(Contributions => res.send(Contributions))
  .catch(err => console.log(err))
})
//Delete 
router.delete('/id:' , req,res,next => {
  const { id } = req.params;
  Contributions.findByIdAndDelete(id)
  .then(Contributions => res.send(Contributions))
  .catch(err => console.log(err))
})
module.exports = router