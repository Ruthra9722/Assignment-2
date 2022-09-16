const app = require("./app");
// const dotenv = require("dotenv");
const bodyParser=require('body-parser')
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//connect to DB
mongoose
  .connect("mongodb://localhost/assignment")
  .then(() => console.log("db connected"))
  .catch((e) => console.log("error"));
  require("../model/post");
require("../model/user");

app.listen(3000, () => console.log("Server running at 3000"));
