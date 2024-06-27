import mongoose from "mongoose";

export default async function db() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("success Connection");
    } catch(error){
        console.log(error)
            throw new Error('Connection failed')
        }
}