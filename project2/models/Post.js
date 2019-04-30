const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PLM=require ("passport-local-mongoose")

const postSchema= new Schema({
title:{type:String,
       default: "title"},
url:String,
creatorId:{
  type: Schema.Types.ObjectId,
  ref: "User"
},
upvotes:{type:Number
    ,default:0},
comments:Number,
tags: [String]
},{
  timestamps:{
    createdAt:'createdAt',
    updatedAt:'updatedAt'
  }
}
)


module.exports = mongoose.model('Post',postSchema)