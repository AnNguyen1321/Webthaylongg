import mongoose from 'mongoose'

const Role = mongoose.Schema({
    rolename: {
        type: String,
        required: true
    }
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Role", Role);