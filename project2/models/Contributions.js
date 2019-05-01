const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contributionSchema = new Schema(
  {
    owner:{
      type: Schema.Types.ObjectId,
      ref:"User"
    }, 
      command: String,
      description: String,
      validation: Boolean
      
    }

)

module.exports = mongoose.model("contributions",contributionSchema)