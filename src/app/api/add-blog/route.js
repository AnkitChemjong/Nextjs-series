import connectToDB from "@/database";
import Joi from 'joi';
//import { NextApiResponse,NextApiRequest } from "next"; only with the typescript
import Blog from "@/models/blog";


const addNewBlog=Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required()
})

const postBlog=async(req,res)=>{

    try{
        console.log("hello world!");
        if (req.method !== 'POST') {
            return res.status(405).json({ success: false, message: 'Method Not Allowed' });
        }
        await connectToDB();
        const extractBlogData=await req.body;
        const {title,description}=extractBlogData;
        const {error}=addNewBlog.validate({title,description})
        if(error){
            return res.status(500).json({
                success:false,
                message:error.details[0].message
            })
        }
        const newlyCreatedBlogItem=await Blog.create(extractBlogData);
        if(newlyCreatedBlogItem){
            return res.json({
                success:true,
                message:"new BLog is created"
            })
        }
        else{
            return res.status(500).json({
                success:false,
                message:"Something went wrong in PostBlog"
            })
        }


    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong in PostBlog"
        })
    }

}
export default postBlog;