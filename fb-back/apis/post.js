import express from 'express';
import Post from '../models/Post.js';
const router = express.Router();
import mongoose from "mongoose";
// create post
router.post('/', async (req, res)=>{
    try {
        const post = await new Post({
            userId:new mongoose.Types.ObjectId,
            description:req.body.description,
            image:req.body.image,
        })
      const newPost= await post.save();
        res.status(201).json({newPost})
    } catch (error) {
        res.status(500).send({ error: err });
    }
})

// update post
router.put('/:id', async (req, res)=>{
    try {
     const post=   await Post.findByIdAndUpdate({_id:req.params.id},{$set:{description:req.body.description}});
     res.status(201).send({ message: "updated successfully" });

    } catch (error) {
        res.status(500).send({ error: err });
    }
})

// delete post 
router.delete('/:id', async (req, res)=>{
    try {
     const post=   await Post.findByIdAndDelete({_id:req.params.id});
     res.status(201).send({ message: "post deleted successfully" });

    } catch (error) {
        res.status(500).send({ error: error });
    }
})
// like post
router.put('/:id/like', async (req, res)=>{
    try {
     const post=   await Post.findByIdAndUpdate({_id:req.params.id},{$push:{likes:req.params.id}});
     res.status(201).send({ message: "likes updated.." });
    }
    catch (error) {
        res.status(500).send({ error: "server error" });
    }
})
// get post
router.get('/:id', async (req, res)=>{
    try {
     const post=   await Post.find(req.params.id);
     res.status(200).send({ post});
    }
    catch (error) {
        res.status(500).send({ error: "server error" });
    }
})
// get timeline post
export default router;