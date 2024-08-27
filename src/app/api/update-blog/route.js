import connectToDB from "@/database"
import Blog from "@/models/blog";
import { NextResponse } from "next/server"
import Joi from 'joi';

const editBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });


export async function PUT(req){
    try{
       await connectToDB();
       const {searchParams}=new URL(req.url);
       const getCurrentBlogID=searchParams.get('id');
       if(!getCurrentBlogID){
        return NextResponse.json({
            success:false,
            message:"BlogId is required"
        })
       }
       const {title,description}=await req.json();
       const {error}=await editBlog.validate({title,description})
        if(error){
            return NextResponse.json({
                success:false,
                message:"Error in updating"
            })
        }
        const updateBlog=await Blog.findByIdAndUpdate(getCurrentBlogID,{title,description},{new:true});
        if(updateBlog){
            return NextResponse.json({
                success:true,
                message:"Blog updated successfully"
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"Error in updating"
            })
        }
    }catch(error){
        console.log(error)
        return NextResponse.json({
            success:false,
            message:"Error in updating"
        })
    }
}