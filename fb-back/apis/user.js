import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt'
const router=express.Router();

//register router
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        })
        await user.save();
        res.status(200).json({ user: user })

    } catch (error) {
        res.status(500).json({ error: err })
    }

})

// login router

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(404).json({ error: "email not found" });
        }
        else {
            const validPass = await bcrypt.compare(req.body.password, user.password)
            if (!validPass) {
                res.status(404).json({ error: "password was wrong" })
            }
            else {
                res.status(200).json({ user })
            }
        }
    } catch (error) {
        res.status(500).json({ error: err })
    }
})

export default router