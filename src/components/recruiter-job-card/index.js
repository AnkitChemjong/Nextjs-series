'use client';
import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";


function RecruiterJobCard({jobItem,jobApplications}){
    return (
        <div>
          <CommonCard
          title={jobItem?.title}
          footerContent={
            <Button
            className="flex h-11 items-center justify-center px-5"
            type= "submit"
          >
           {
            jobApplications?.filter(item=>item.jobID===jobItem?._id).length
           }
          </Button>
          }
          icon={<JobIcon/>}
          description={jobItem?.companyName}
          />
        </div>
    )
}

export default RecruiterJobCard;