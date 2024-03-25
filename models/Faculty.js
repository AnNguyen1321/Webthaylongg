import mongoose from 'mongoose'
const Faculty = mongoose.Schema({
    facultyname: {
        type: String,
        required: true,
        unique : true
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Faculty", Faculty);