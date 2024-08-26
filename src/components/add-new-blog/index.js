"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
  } from "../ui/dialog";
  import { Input } from "../ui/input";
  import { Label } from "../ui/label";

const AddBlog=({openBlogDialog,setOpenBlogDialog})=>{
  const [loading,setLoading]=useState(false);
    const [data,setData]=useState({
        title:'',
        description:'',
    });
    

    const handleChange=(e)=>{
     const {name,value}=e.target;
     setData((prev)=>({...prev,[name]:value}));
    }
    const handleSaveBlogData=async()=>{
      try{
          const apiResponse=await fetch('/api/add-blog',{
            method:'POST',
            headers:{'Content-Type': 'application-json'},
            body: JSON.stringify(data)
          });
          const result=await apiResponse.json();
          // console.log(result);
      }
      catch(err){
        console.log(err);
        setLoading(false);
      }
    }

    return (
 <>
  <div>
     <Button onClick={()=>setOpenBlogDialog(true)}>Add New Bog</Button>
    </div>
    <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Blog</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              defaultValue={data.title}
              onChange={handleChange}
              placeholder="Title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              defaultValue={data.description}
              onChange={handleChange}
              placeholder="Description"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSaveBlogData} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
 </>
    )
}

export default AddBlog;