import express from 'express';
const router=express.Router();
import User from '../models/User.js';

// update user

router.put('/:id', async (req, res)=>{
    try {
    const user=await User.findByIdAndUpdate({_id:req.params.id},{$set:{username:req.body.username}})
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    else{
        return res.status(200).json({message:"user updated successfully"})
    } 
    } catch (error) {
        return res.status(500).json({error:error})
    }
})

// delete user

router.delete('/:id', async (req, res)=>{
    try {
        await User.remove({_id:req.params.id})
        return res.status(200).json({message:"deleted successfully"})
    } catch (error) {
        return res.status(500).json({error:error})
    }
})

// get user

router.get('/:id', async (req, res)=>{
    try {
        const user=await User.findById({_id:req.params.id})
        if(!user){
        return res.status(404).json({error:"user not found"})
        }
        else{
            const {password,updatedAt,...others} = user._doc
        return res.status(200).json({others})
        }
    } catch (error) {
        return res.status(500).json({error:error})
    }
})

// push id to followers

router.put('/:id/follow', async (req, res)=>{
    try {
        // for removing from an array need to use $pull
        const user=await User.findByIdAndUpdate({_id:req.params.id},{$push:{following:req.params.id}})
        user.save();
        res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({error:error})
    }
})


export default router;