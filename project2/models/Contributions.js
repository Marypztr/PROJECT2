const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contributionSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    command: String,
    description: String,
    validation: {
      type: Boolean,
      default: false,
    },
    //owner:String

  }

)

module.exports = mongoose.model("Contributions", contributionSchema)