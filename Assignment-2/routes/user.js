const router = require("express").Router();
const post = require("../model/post");
const user = require("../model/user");
const jwt=require('jsonwebtoken')

router.post('/register',async(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;

    try {
        const exist=await user.findOne({email:email})
        if(exist) return res.send("Email already used")
        const data=await user.insertMany({
            name,
            email,
            password
        })
        if(data) return res.send(data+" added")
        return res.send("error")
    } catch (error) {
        return res.send(error.message)
    }
})

router.post('/login',async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    try {
        const data=await user.findOne({$and:[{email:email},{password:password}]})
        if(data) {
            const token=jwt.sign({_id:data._id},''+process.env.SECRET)
            return res.header({'x-auth-token':token}).send(data)}
        return res.send("Please enter correct id password")
    } catch (error) {
        return res.send(error.message)
    }
})

module.exports = router;
