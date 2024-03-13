import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const Image = mongoose.Schema({
    contribution_id:{
        type: ObjectId,
        ref:'Contribution',
        required:true
    },
    filepath: {
        type: String,
        required: true
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Image", Image);