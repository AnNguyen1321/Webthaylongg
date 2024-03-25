import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const Contribution = mongoose.Schema({
    account_id:{
        type: ObjectId,
        ref:'Account',
        required:true
    },
    faculty_id:{
        type: ObjectId,
        ref:'Faculty',
    },
    submission_date: {
        type: Date,
    },
    upload_date: {
        type: Date,
    },
    closure_date: {
        type: Date,
    },
    finalclosure_date: {
        type: Date,
    },
    status: {
        type: Number,
    }
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Contribution", Contribution);