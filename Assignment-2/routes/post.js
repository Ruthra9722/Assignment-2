const router = require("express").Router();
const post = require("../model/post");
const user = require("../model/user");

router.post('/create',async(req,res)=>{
    let title=req.body.title
    let postbody=req.body.postbody
    let user=req.user._id
    try {
      const data=await post.insertMany({
        title,
        body:postbody,
        user
      })
      if(data){
        console.log(data);
      const fdata=await post.findOne({_id:data[0]._id}).populate('user','name')
       if(fdata) return res.send(fdata)
        return res.send("data not found")}
       return res.send("error")
    } catch (error) {
        return res.send(error.message)
    }
})

router.get('/getall',async(req,res)=>{
    try {
        const data=await post.find()
        if(data.length>0)return res.send(data)
        return res.send("no posts available")
    } catch (error) {
        return res.send(error.message)
    }
})

router.put('/update/:postId',async(req,res)=>{
    let _id=req.params.postId
    let title=req.body.title
    try {
        const data=await post.updateOne({_id:_id},{
            $set:{title:title}
        })
        if(data) return res.send("updated")
        return res.send("error")
    } catch (error) {
        return res.send(error.message)
    }
})

router.delete('/delete/:postId',async(req,res)=>{
    let _id=req.params.postId
    try {
        const data=await post.remove({_id:_id})
        if(data) return res.send("deleted")
        return res.send("error")
    } catch (error) {
        return res.send(error.message)
    }
})

module.exports = router;