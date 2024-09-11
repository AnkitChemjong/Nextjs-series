'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog,DialogHeader,DialogTitle,DialogContent } from "../ui/dialog";
import CommonForm from "../common-form";
import { initialPostNewJobFormData,postNewJobFormControls } from "@/utils";


async function PostNewJob({profileInfo}){
    const [showDialog,setShowDialog]=useState(false);
    const [jobFormData,setJobFormData]=useState({...initialPostNewJobFormData,companyName:profileInfo?.recruiterInfo?.companyName});

    function handlePostNewBtnValid(){
     return Object.keys(jobFormData).every((key)=>jobFormData[key].trim() !== "");
    }
    return(
      <div>
        <Button
        onClick={()=>setShowDialog(true)}
        className="disabled:opacity-60 flex h-11 items-center justify-center px-5">
          Post A Job
        </Button>
        <Dialog open={showDialog} onOpenChange={()=>{
            setShowDialog(false);
            setJobFormData({...initialPostNewJobFormData,companyName:profileInfo?.recruiterInfo?.companyName})
        }}>
            <DialogContent className="sm:max-w-screen-md h-[600px] overflow-scroll">
            <DialogHeader>
                  <DialogTitle>Post New Job</DialogTitle>   
                  <div className="grid gap-4 py-4">
                    <CommonForm
                    formControls={postNewJobFormControls}
                    buttonText={"Add Job"}
                    formData={jobFormData}
                    setFormData={setJobFormData}
                    isBtnDisabled={!handlePostNewBtnValid()}
                    />

                  </div>
            </DialogHeader>
            </DialogContent>

        </Dialog>
      </div>
    )
}
export default PostNewJob;