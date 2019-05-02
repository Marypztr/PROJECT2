const mongoose = require("mongoose")
const Schema = mongoose.Schema
const PLM = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    photoURL: String,
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER",
    },
    contributions:[{
        type:Schema.Types.ObjectId,
        ref:"Contributions"
    }]
}, {
        timestamps: true,
        versionkey: false
    }
)

userSchema.plugin(PLM, { usernameField: "email" })

const User = mongoose.model("User", userSchema)

module.exports = User

