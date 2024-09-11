'use client'
import { useState } from "react";
import { Tabs,TabsTrigger,TabsList,TabsContent} from "../ui/tabs";
import CommonForm from "../common-form";
import { recruiterOnBoardFormControls,initialRecruiterFormData,candidateOnBoardFormControls,initialCandidateFormData } from "@/utils";
import { useUser } from "@clerk/nextjs";
import { createProfileAction } from "@/actions";


function OnBoard(){

 const [currentTab,setCurrentTab]=useState('candidate');
 const [recruiterFormData,setRecruiterFormData]=useState(initialRecruiterFormData);
 const [candidateFormData,setCandidateFormData]=useState(initialCandidateFormData);
 const currentAuthUser=useUser();
 const {user}=currentAuthUser;
function handleTabChange(value){
    setCurrentTab(value);
}
function handleFileChange(e){
      const {name,files,value}=e.target;
      setCandidateFormData({...candidateFormData,[name]:files? files[0]:value})  

}
function handleRecruiterFormValid(){
    return (recruiterFormData && recruiterFormData.name.trim() !== '' &&
    recruiterFormData.companyName.trim() !== '' && recruiterFormData.companyRole.trim() !=='')
}
async function createProfile(){
  const data={
    recruiterInfo:recruiterFormData,
    role:'recruiter',
    isPremiumUser:false,
    userId:user?.id,
    email:user?.primaryEmailAddress?.emailAddress
  }
  await createProfileAction(data,"/onboard");
    
}

    return(
        <div className="bg-white">
        <Tabs value={currentTab} onValueChange={handleTabChange}>
         <div className="w-full">
                 <div className="flex items-baseline justify-between border-b-8 border-b-gray-800 pb-6 pt-24">
                     <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                         Welcome To onBoarding
                     </h1>
                     <TabsList>
                         <TabsTrigger value="candidate">Candidate</TabsTrigger>
                         <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
                     </TabsList>
                 </div>
         </div>
         <TabsContent value="candidate">
         <CommonForm
            formControls={candidateOnBoardFormControls}
            buttonText={"OnBoard as candidate"}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            handleFileChange={handleFileChange}
            />
         </TabsContent>
         <TabsContent value="recruiter">
            <CommonForm
            formControls={recruiterOnBoardFormControls}
            buttonText={"OnBoard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecruiterFormValid()}
            action={createProfile}
            />
         </TabsContent>
        </Tabs>
     </div>
    )
}

export default OnBoard;