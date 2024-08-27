"use client"
import { useState } from "react";
import AddBlog from "../add-new-blog";
import moment from "moment";
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "../ui/button";
  import { useRouter } from "next/navigation";
import { Label } from "../ui/label";




const BlogOverview=({blogList})=>{
    const [openBlogDialog,setOpenBlogDialog]=useState(false);
    const [blogId,setBlogId]=useState(null);
    const router=useRouter();

    const deleteBlog=async(id)=>{
       try{
            const apiResponse=await fetch(`/api/delete-blog?id=${id}`,{
                method:"DELETE"
            })
            const result=await apiResponse.json();
            if(result?.success){
                router.refresh();
            }
       }
       catch(e){
        console.log("Error deleting"+e.message);
       }
    }
    const handelEditBlog=async(blog)=>{
       setBlogId(blog._id);
       setOpenBlogDialog(true);
     }

    

   

    return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
        <AddBlog openBlogDialog={openBlogDialog} setOpenBlogDialog={setOpenBlogDialog}
           blogId={blogId}
           setBlogId={setBlogId}
        />
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {
            blogList && blogList.length>0? (
                    blogList.map((blog)=>{
                        return(
                           <Card className="py-5 ">
                            <CardContent>
                                <CardHeader>
                                    {blog._id}
                                </CardHeader>
                                <CardTitle className="mb-5">
                                    {blog.title}
                                </CardTitle>
                                <CardDescription>{blog.description}</CardDescription>
                                     
                            </CardContent>
                            <CardFooter>
                                <p>Created AT:</p>
                                {moment(blog.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
                            </CardFooter>
                            <div className="mt-5 flex flex-row gap-10 items-center justify-center
                            ">
                             <Button className="hover:scale-[1.1]" onClick={()=>handelEditBlog(blog)}>Edit</Button>
                             <Button className="hover:scale-[1.1]" onClick={()=>deleteBlog(blog._id)}>Delete</Button>
                            </div>
                           </Card>   
                        )
                    })
                
            ):(
                <Label className="text-3xl font-extrabold">No Blog Found Please Add Blog</Label>
            )
        }
    </div>
        </div>
        )
}
export default BlogOverview;