'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog,DialogHeader,DialogTitle,DialogContent } from "../ui/dialog";
import CommonForm from "../common-form";
import { initialPostNewJobFormData,postNewJobFormControls } from "@/utils";
import { postNewJobAction } from "@/actions";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";


async function PostNewJob({profileInfo,user,jobList}){
    const [showDialog,setShowDialog]=useState(false);
    const [jobFormData,setJobFormData]=useState({...initialPostNewJobFormData,companyName:profileInfo?.recruiterInfo?.companyName});

    function handlePostNewBtnValid(){
     return Object.keys(jobFormData).every((key)=>jobFormData[key].trim() !== "");
    }

    async function createNewJob(){
      await postNewJobAction({
        ...jobFormData,recruiterId:user?.id,applicants:[]
      },'/jobs');
      setJobFormData({...initialPostNewJobFormData,companyName:profileInfo?.recruiterInfo?.companyName});
      setShowDialog(false);
    }


  const {toast}=useToast();
    function handleAddNewJob(){
      if(!profileInfo?.isPremiumUser && jobList?.length >= 2){
        toast({
          variant:"destructive",
          title:"You can post max 2 jobs",
          description:"Please opt for membership to post more jobs",
          action:<Link href={'/membership'}>Go to Membership</Link>
        })
        return;
      }
      setShowDialog(true)
    }
    return(
      <div>
        <Button
        onClick={handleAddNewJob}
        className="disabled:opacity-60 flex h-11 items-center justify-center px-5">
          Post A Job
        </Button>
        <Dialog open={showDialog} onOpenChange={()=>{
            setShowDialog(false);
            setJobFormData({...initialPostNewJobFormData,companyName:profileInfo?.recruiterInfo?.companyName})
        }}>
            <DialogContent className="sm:max-w-screen-md h-[600px] overflow-scroll bg-white">
            <DialogHeader>
                  <DialogTitle>Post New Job</DialogTitle>   
                  <div className="grid gap-4 py-4">
                    <CommonForm
                    formControls={postNewJobFormControls}
                    buttonText={"Add Job"}
                    formData={jobFormData}
                    setFormData={setJobFormData}
                    isBtnDisabled={!handlePostNewBtnValid()}
                    action={createNewJob}
                    />

                  </div>
            </DialogHeader>
            </DialogContent>

        </Dialog>
      </div>
    )
}
export default PostNewJob;