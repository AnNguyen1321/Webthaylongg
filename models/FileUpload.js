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
    fileSize: {
        type : Number,
        required : true
    },
    fileName:{
        type : String, 
        required : true
    },
    UploadDate:{
        type : Date,
        required : true
    },
},  {
    timestamps: true,
  })
module.exports = mongoose.model("Image", Image);