import mongoose from 'mongoose'

const Role = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Role", Role);