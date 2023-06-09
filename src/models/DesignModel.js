const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId;

const DesignSchema = new mongoose.Schema({
   
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   userId: {
      type: ObjectId,
      ref: "user",
      required: true,
      trim: true
   },
   user:{
      type:String,
      required:true,
   },
   Model:{
      type:String, 
      require:true
   
   },
   price: {
      type: Number,
      required: true

   },
   tags: [String]


}, { timestamps: true }
)
module.exports = mongoose.model("design", DesignSchema)