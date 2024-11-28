
import mongoose from "mongoose";

export const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.DB);
        console.log("DB connected successfully");
    }catch(e){
        console.log(e);
    }
}