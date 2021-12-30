import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        min:4,
        max:8
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        min:6
    },
    profilePicture: {
        type: String,
        default:""
    },
    coverpicture:{
        type: String,
        default:""
    },
    following:{
        type:Array,
        default:[]
    },
    followers:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        max:50
    },
    city: {
        type:String
    },
    from: {
        type:String
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
},{timestamps:true})

export default mongoose.model("User",userSchema)