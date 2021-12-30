import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import user from './apis/user.js';
import usercurd from './apis/userCURD.js';
import post from './apis/post.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(() => {console.log("db conected...")})
.catch(() => {console.log("connection was failed")})

app.use('/api/user',user);
app.use('/api/usercurd',usercurd);
app.use('/api/post',post);



app.listen(PORT, () => {
    console.log('server listining to '+PORT)
})