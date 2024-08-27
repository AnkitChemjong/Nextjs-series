import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(req){
    try{
        await connectToDB();
        const allBlog=await Blog.find({});
        if(allBlog){
            return NextResponse.json({
                success:true,
                data:allBlog
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"error getting blog data"
            })
        }
    }
    catch(err){
        console.log(err);
        return NextResponse.json({
            success:false,
            message:err.message
        })
    }
}