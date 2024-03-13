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
        required:true
    },
    submissiondate: {
        type: Date,
        required: true
    },
    uploaddate: {
        type: Date,
        required: true
    },
    closuredate: {
        type: Date,
        required: true
    },
    finalclosuredate: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        required: true,
    }
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Contribution", Contribution);