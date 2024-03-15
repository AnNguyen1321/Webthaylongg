import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const Statistics = mongoose.Schema({
    contributioncount: {
        type: Number,
        required: true
    },
    faculty_id:{
        type: ObjectId,
        ref:'Faculty',
        required:true
    },
    FacultyCount:{
        type :Number
    },
    ContributorsCount:{
        type : Number
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Statistics", Statistics);