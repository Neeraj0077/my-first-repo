// import mongoose from 'mongoose';

// mongoose.connect("mongodb+srv://neerajsv964:6Og6psBJqIe6CNR6@cluster0.3hpltcz.mongodb.net/Shopit");

// import mongoose, { model,schema} from "mongoose";
// import { userMiddleware } from "./middleware.js";
// const {Schema} = mongoose;
// const {ObjectId} = mongoose.Types; 
// mongoose.connect("mongodb+srv://neerajsv964:6Og6psBJqIe6CNR6@cluster0.3hpltcz.mongodb.net/Shopit");

// const userSchema = new Schema({
//     username : {type:String,unique:true},
//     password : String
// })

// export const userModel = model("User",userSchema);

import mongoose , {model, Schema} from "mongoose";
mongoose.connect("mongodb+srv://neerajsv964:6Og6psBJqIe6CNR6@cluster0.3hpltcz.mongodb.net/brainly");

const userSchema = new Schema ({
    username : {type:String, unique:true},
    password : String
});

const contentSchema = new Schema({
    title : String,
    link : String,
    tags : [{type:mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type: mongoose.Types.ObjectId, ref:'User', required : true}
})

export const userModel = model("User", userSchema); 
export const contentModeld = model("Content", contentSchema);