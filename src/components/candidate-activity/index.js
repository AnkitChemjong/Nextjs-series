'use client'
import { Tabs,TabsList, TabsTrigger } from "../ui/tabs";

function CandidateActivity({jobList,jobApplicants}){
    console.log(jobApplicants)

const uniqueStatusArray=[...new Set(jobApplicants?.map(jobApplicantItem=>jobApplicantItem.status).flat(1))]
    return(
        <div className="mx-auto max-w-7xl">
       <Tabs defaultValue="Applied" className="w-full">
        <div className="flex items-baseline justify-between border-b pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950">Your Activity</h1>
       <TabsList>
      {
        uniqueStatusArray.map((status)=>(
            <TabsTrigger value={status}>
                {status}
            </TabsTrigger>
        ))
      }
       </TabsList>
        </div>
       </Tabs>
        </div>
    )
}

export default CandidateActivity;