"use client";
import PostNewJob from "../post-new-jobs";
import CandidateJobCard from "../candidate-job-card";
import RecruiterJobCard from "../recruiter-job-card";
import { filterMenuDataArray } from "@/utils";
import { Label } from "../ui/label";
import { Menubar,MenubarItem ,MenubarTrigger,MenubarMenu,MenubarContent} from "../ui/menubar";
import { useState } from "react";

function JobListing({ user, profileInfo, jobList ,jobApplications,filterCategories}) {

  const [filterParams,setFilterParams]=useState({});
  
  function handleFilter(getSectionID,getCurrentOption){
    let cpyFilterParams={...filterParams};
    const indexOfCurrentSection=Object.keys(cpyFilterParams).indexOf(getSectionID);
    if(indexOfCurrentSection===-1){
      cpyFilterParams={
        ...cpyFilterParams,
        [getSectionID]:[getCurrentOption]
      }
    }
    else{
      const indexOfCurrentOption=cpyFilterParams[getSectionID].indexOf(getCurrentOption);
      if(indexOfCurrentOption === -1) cpyFilterParams[getSectionID].push(getCurrentOption);
      else cpyFilterParams[getSectionID].splice(indexOfCurrentOption, 1);
    }
    setFilterParams(cpyFilterParams);
    sessionStorage.setItem('filterParams',JSON.stringify(cpyFilterParams));
  }

 const filterMenus=filterMenuDataArray?.map(item=>({
  id:item.id,
  name:item.label,
  options:[
    ...new Set(filterCategories?.map(listItem=>listItem[item.id])),
  ]
 })
  )


  return (

    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {profileInfo?.role === "candidate"
              ? "Explore All Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center">
            {profileInfo?.role === "candidate" ? (
              <Menubar>
                {
                  filterMenus?.map(filterMenu=>
                    <MenubarMenu>
                      <MenubarTrigger>{filterMenu.name}</MenubarTrigger>
                      <MenubarContent>
                        {
                          filterMenu.options.map((option,optionIdx)=>(
                            <MenubarItem
                            key={optionIdx}
                            className="flex items-center"
                            onClick={()=>handleFilter(filterMenu.id,option)}
                            >
                              <div className={`h-4 w-4 border rounded border-gray-900 ${filterParams && Object.keys(filterParams).length>0 && filterParams[filterMenu.id] && filterParams[filterMenu.id].indexOf(option) > -1? 'bg-black':''}`}/>
                               <Label className="ml-3 cursor-pointer text-sm text-gray-600">
                                {option}
                               </Label>
                              
                            </MenubarItem>
                          ))
                        }
                      </MenubarContent>
                    </MenubarMenu>
                    )
                }
              </Menubar>
            ) : (
              <PostNewJob user={user} profileInfo={profileInfo} />
            )}
          </div>
        </div>
        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {jobList && jobList.length > 0 ? (
                    jobList.map((jobItem) => {
                      return profileInfo?.role === "candidate" ? (
                        <CandidateJobCard profileInfo={profileInfo} jobItem={jobItem} jobApplications={jobApplications}/>
                      ) : (
                        <RecruiterJobCard jobItem={jobItem} jobApplications={jobApplications}/>
                      );
                    })
                  ) : (
                    <div>No Jobs</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
