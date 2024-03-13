import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const Guest = mongoose.Schema({
    faculty_id:{
        type: ObjectId,
        ref:'Faculty',
        required:true
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Guest", Guest);