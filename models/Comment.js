import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const Comment = mongoose.Schema({
    account_id:{
        type: ObjectId,
        ref:'Account',
        required:true
    },
    contribution_id: {
        type: ObjectId,
        ref:'Account',
        required:true
    },
    comment: {
        type: String,
        required: true
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Comment", Comment);