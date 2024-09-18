import { fetchJobApplicationForCandidateAction, fetchJobsForCandidateAction } from "@/actions";
import CandidateActivity from "@/components/candidate-activity";
import { currentUser } from "@clerk/nextjs/server";

async function Activity(){
const user=await currentUser();
const jobApplicants=await fetchJobApplicationForCandidateAction(user?.id);
const jobList=await fetchJobsForCandidateAction();


if(jobApplicants.length===0) {
    return(
    <div className=" w-100% h-[200px] lg:h-[450px] flex items-center justify-center">
           <h1 className="text-3xl md:text-7xl text-gray-800 font-mono font-bold flex-wrap">No Activity</h1>
    </div>
)
}
else{
return (
            <CandidateActivity 
            jobList={jobList}
            jobApplicants={jobApplicants}
            />
        )
}

}

export default Activity;