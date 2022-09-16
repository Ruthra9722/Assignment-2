const mongooose = require("mongoose");

const userschema = new mongooose.Schema({
  // Your code goes here
name:{type:String, required:true},
email:{type:String, required:true},
password:{type:String, required:true},

});

const user = mongooose.model("users", userschema);

module.exports = user;
