'use client';
import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";


function RecruiterJobCard({jobItem}){
    return (
        <div>
          <CommonCard
          title={jobItem?.title}
          footerContent={
            <Button
            className="flex h-11 items-center justify-center px-5"
            type= "submit"
          >
            7 Applicants
          </Button>
          }
          icon={<JobIcon/>}
          />
        </div>
    )
}

export default RecruiterJobCard;