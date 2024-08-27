"use client";

import { useEffect, useState } from "react";
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
  import { useRouter } from "next/navigation";

const AddBlog=({openBlogDialog,setOpenBlogDialog,blogId,setBlogId})=>{
  const [loading,setLoading]=useState(false);
    const [data,setData]=useState({
        title:'',
        description:'',
    });
  const router=useRouter();
  useEffect(()=>{
    router.refresh();
  },[]);

    const handleChange=(e)=>{
     const {name,value}=e.target;
     setData((prev)=>({...prev,[name]:value}));
    }
    const handleSaveBlogData=async()=>{
      try{
        setLoading(true);
        
          const apiResponse=blogId!==null? await fetch(`/api/update-blog?id=${blogId}`,{
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          }):await fetch('/api/add-blog',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          });
        
          const result=await apiResponse.json();
         
          if(result?.success){

            setData({ title: '', description: '' });
            setOpenBlogDialog(false);
            setLoading(false);
            setBlogId(null);
            router.refresh();
          }
      }
      catch(err){
        console.log(err);
        setData({ title: '', description: '' });
        setLoading(false);
        setBlogId(null);
        setOpenBlogDialog(false);
      } 
      finally {
        setLoading(false);
        setOpenBlogDialog(false);
        setBlogId(null);
        setData({ title: '', description: '' });
        } 
      }
     

    return (
 <>
  <div>
     <Button onClick={()=>setOpenBlogDialog(true)}>Add New Bog</Button>
    </div>
    <Dialog open={openBlogDialog} onOpenChange={()=>{
      setOpenBlogDialog(false);
      setData({ title: '', description: '' });
      setBlogId(null);
      }}>
      
      <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>{blogId===null? "Add New Blog":"Edit Blog"}</DialogTitle>
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
          <Button onClick={handleSaveBlogData} type="submit">{
            loading? "Loading...":"Save changes"
          }</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
 </>
    )
}

export default AddBlog;