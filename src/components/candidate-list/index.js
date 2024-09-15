"use client";
import { getCandidateDetailsByAction } from "@/actions";
import { Fragment } from "react";
import { Button } from "../ui/button";
import { Dialog,DialogHeader,DialogTitle,DialogContent } from "../ui/dialog";
import { createClient } from "@supabase/supabase-js";


const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
const supabaseClient = createClient(URL, API_KEY);

function CandidateList({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobApplications,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
}) 

{

    async function handleFetchCandidateDetails(getCurrentCandidateId){
        const data =await getCandidateDetailsByAction(getCurrentCandidateId);
        if(data) {
            setCurrentCandidateDetails(data);
            setShowCurrentCandidateDetailsModal(true);
        }

    }
    async function handlePreviewResume(){
      const {error,data}=supabaseClient.storage.from('job-portal-public').getPublicUrl(currentCandidateDetails?.candidateInfo?.resume);
      if(error) return error;
      console.log(data);
      const a=document.createElement('a');
      a.href=data?.publicUrl;
      a.setAttribute('download',data?.publicUrl?.split())


    }
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 p-10 lg:grid-cols-3">
        {jobApplications && jobApplications.length > 0 ? (
          jobApplications.map((jobApplicantItem) => {
            return (
              <div className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {jobApplicantItem?.name}
                  </h3>
                  <Button
                  onClick={()=>handleFetchCandidateDetails(jobApplicantItem?.candidateUserID)}
                   className="flex h-11 items-center justify-center px-5">
                    View Profile
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Applicants</div>
        )}
      </div>
      <Dialog open={showCurrentCandidateDetailsModal} onOpenChange={()=>{
        setShowCurrentCandidateDetailsModal(false);
        setCurrentCandidateDetails(null);
        }}>
        <DialogContent className="bg-white">
            <div>
                <h1 className="text-2xl font-bold text-black">{currentCandidateDetails?.candidateInfo?.name},{" "} {currentCandidateDetails?.email}</h1>
                <p className="text-xl font-medium text-black">
                    {currentCandidateDetails?.candidateInfo?.currentCompany}
                </p>
                <p className="text-sm font-normal text-black">
                    {currentCandidateDetails?.candidateInfo?.currentJobLocation}
                </p>
                <p className="text-sm font-normal text-black">
                    Total Experience: {currentCandidateDetails?.candidateInfo?.totalExperience}
                </p>
                <p className="text-sm font-normal text-black">
                    Salary: {currentCandidateDetails?.candidateInfo?.currentSalary} {" "} PM
                </p>
                <p className="text-sm font-normal text-black">
                    Notice Period: {currentCandidateDetails?.candidateInfo?.noticePeriod? currentCandidateDetails?.candidateInfo?.noticePeriod:"any"} {" "} Days
                </p>

                <div className="flex gap-4 items-center mt-6">
                    <h1>Previous Companies:</h1>
            {currentCandidateDetails?.candidateInfo?.previousCompanies?.split(",").map((skillItem) => {
              return (
                <div className="w-[100px] flex justify-center items-center h-[35px] bg-black rounded-[4px]">
                  <h2 className="text-[13px] font-medium text-white">
                    {skillItem}
                  </h2>
                </div>
              );
            })}
          </div>

                <div className="flex items-center gap-4 mt-6">
                <h1>Candidate Skills:</h1>
            {currentCandidateDetails?.candidateInfo?.skills?.split(",").map((skillItem) => {
              return (
                <div className="w-[100px] flex justify-center items-center h-[35px] bg-black rounded-[4px]">
                  <h2 className="text-[13px] font-medium text-white">
                    {skillItem}
                  </h2>
                </div>
              );
            })}
          </div>
            </div>
        <DialogFooter>
            <div className="flex gap-3">
                <Button onClick={handlePreviewResume}  className="flex h-11 items-center justify-center px-5">Resume</Button>
                <Button  className="flex h-11 items-center justify-center px-5">Select</Button>
                <Button  className="flex h-11 items-center justify-center px-5">Reject</Button>
            </div>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default CandidateList;
