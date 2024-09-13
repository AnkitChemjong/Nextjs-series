'use client'
import {Fragment, useState} from 'react';
import CommonCard from '../common-card';
import JobIcon from '../job-icon';
import { Button } from '../ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "../ui/drawer"
  

function CandidateJobCard({jobItem}){
    const [showJobDetailsDrawer,setShowJobDetailsDrawer]=useState(false);

    return (
   <Fragment>
    <Drawer open={showJobDetailsDrawer} onOpenChange={()=>{
        setShowJobDetailsDrawer(false);
    }}>

    <CommonCard
    icon={<JobIcon/>}
    title={jobItem?.title}
    description={jobItem?.companyName}
    footerContent={
        <DrawerTrigger asChild>
        <Button
        className="flex h-11 items-center justify-center px-5">
        View Details
      </Button>
        </DrawerTrigger>
    }
    />
    <DrawerContent className="p-6">
        <DrawerHeader className="px-0">
        <div className='flex justify-between'>
            <DrawerTitle className="text-4xl font-extrabold text-gray-800">
                {jobItem?.title}
                </DrawerTitle>
                <div className="flex gap-3">
                <Button
        className="flex h-11 items-center justify-center px-5">
        Apply
      </Button>
      <Button
      onClick={()=>setShowJobDetailsDrawer(false)}
        className="flex h-11 items-center justify-center px-5">
       Cancel
      </Button>

                </div>
        </div>  
        </DrawerHeader>
        <DrawerDescription className="text-2xl font-medium text-gray-600">
            {jobItem?.description}
            <span className="text-xl ml-4 font-normal text-gray-500">{jobItem?.location}</span>
        </DrawerDescription>
        <div className="w-[150px] mt-6 flex justify-center items-center h-[40px] bg-black rounded-[4px]">
            <h2 className="text-xl font-bold text-white">{jobItem?.type}</h2>
        </div>
        <h3 className='text-2xl font-medium text-black mt-3'>Experience:- {jobItem?.experience}</h3>
        <div className="flex gap-4 mt-6">
              {
                jobItem?.skills.split(",").map((skillItem)=>{
                    return(
                        <div className="w-[100px] flex justify-center items-center h-[35px] bg-black rounded-[4px]">
                            <h2 className="text-[13px] font-medium text-white">{skillItem}</h2>
                            </div>
                    )
                })
              }
        </div>
    </DrawerContent>
    </Drawer>
   </Fragment>
    )
}

export default CandidateJobCard;