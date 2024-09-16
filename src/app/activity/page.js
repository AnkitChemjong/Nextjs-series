import { fetchJobApplicationForCandidateAction, fetchJobsForCandidateAction } from "@/actions";
import CandidateActivity from "@/components/candidate-activity";
import { currentUser } from "@clerk/nextjs/server";

async function Activity(){
const user=await currentUser();
const jobApplicants=await fetchJobApplicationForCandidateAction(user?.id);
const jobList=await fetchJobsForCandidateAction();

    return (
        <CandidateActivity 
        jobList={jobList}
        jobApplicants={jobApplicants}
        />
    )
}

export default Activity;