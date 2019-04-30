const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contributionSchema = new Schema(
  {
    owner:{
      type: Schema.Types.ObjectId,
      ref:"User"
    }, 
      comand: String,
      description: String
      
    }

)

module.exports = mongoose.model("contributions",contributionSchema)