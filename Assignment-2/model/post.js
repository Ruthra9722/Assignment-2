const mongoose = require("mongoose");

const postschema = new mongoose.Schema({
  // Your code goes heres heres here
  title:{type:String,required:true},
  body:{type:String,required:true},
  user:{type:mongoose.Schema.Types.ObjectId,
    ref:'user'}
});

const post = mongoose.model("post", postschema);

module.exports = post;
