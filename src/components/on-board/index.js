"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "../ui/tabs";
import CommonForm from "../common-form";
import {
  recruiterOnBoardFormControls,
  initialRecruiterFormData,
  candidateOnBoardFormControls,
  initialCandidateFormData,
} from "@/utils";
import { useUser } from "@clerk/nextjs";
import { createProfileAction } from "@/actions";
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
const supabaseClient = createClient(URL, API_KEY);

function OnBoard() {
    const [currentTab, setCurrentTab] = useState("candidate");
    const [recruiterFormData, setRecruiterFormData] = useState(
        initialRecruiterFormData
        );
        const [candidateFormData, setCandidateFormData] = useState(
            initialCandidateFormData
            );
  const [file, setFile] = useState(null);
  const currentAuthUser = useUser();
  const { user } = currentAuthUser;

  // function handleFileChange(event){
  //     event.preventDefault();
  //     console.log(event.target.files);

  // }

  function handleTabChange(value) {
    setCurrentTab(value);
  }
  function handleFileChange(e) {
    e.preventDefault();
    const { name, files, value } = e.target;
    setFile(files[0]);
  }
  async function handleUploadPdfToSupabase() {
    const { data, error } = await supabaseClient.storage
      .from("job-board")
      .upload(`/public/${file.name}`,file,{
        cacheControl:'3600',
        upsert:false,
      });
      if(error) console.log(error,error.message);
      if(data){
        setCandidateFormData({...candidateFormData,resume:data.path})
      }
  }

  useEffect(() => {
    if (file) {
      handleUploadPdfToSupabase();
    }
  }, [file]);

  function handleRecruiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }

function handleCandidateFormValid(){
    return (
        Object.keys(candidateFormData).every((key)=>{
        return candidateFormData[key].trim() !== ""
    })
    )
}

  async function createProfile() {
    const data =currentTab==='candidate'? {
       candidateInfo:candidateFormData,
       role:'candidate',
       isPremiumUser:false,
       userId: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,


    }:{
      recruiterInfo: recruiterFormData,
      role: "recruiter",
      isPremiumUser: false,
      userId: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
    };
    await createProfileAction(data, "/onboard");
  }

  return (
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
          action={createProfile}
            formControls={candidateOnBoardFormControls}
            buttonText={"OnBoard as candidate"}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            handleFileChange={handleFileChange}
            isBtnDisabled={!handleCandidateFormValid()}
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
  );
}

export default OnBoard;
