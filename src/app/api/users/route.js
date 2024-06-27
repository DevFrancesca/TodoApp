import { NextResponse } from "next/server";
import db from "@/lib/db";
import userModel from "@/lib/user-model";

export const GET = async()=>{
    try{
        await db();
        const users = await userModel.find();
        return NextResponse.json(users)
    }catch(error){
        console.log(error)
    }
}