const express = require("express");
const app = express();

// Import routes
const user = require("../routes/user");
const post=require("../routes/post")
const auth=require("../middleware/auth")

//Router MIddlewares
app.use(express.json());
app.use("/api/user", user);
app.use("/api/post",auth,post)

module.exports = app;
