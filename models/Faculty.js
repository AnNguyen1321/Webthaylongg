import mongoose from 'mongoose'
const Faculty = mongoose.Schema({
    facultyname: {
        type: String,
        required: true
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Faculty", Faculty);