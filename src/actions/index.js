'use server'
import connectDB from '@/database';
import Profile from '@/models/profile.js';
import Job from '@/models/job.js';
import {revalidatePath} from 'next/cache'
import Application from '@/models/application.js';



//create profile action
export async function createProfileAction(formData,pathToRevalidate){
    await connectDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
}

//fetch the user after role

export async function fetchProfileAction(id){
    await connectDB();
    const result =await Profile.findOne({userId:id});
    return JSON.parse(JSON.stringify(result))
}

//create job action
export async function postNewJobAction(formData,pathToRevalidate){
    await connectDB();
    await Job.create(formData);
    revalidatePath(pathToRevalidate);
}


//fetch job action

export async function fetchJobsForRecruiterAction(id){
    await connectDB();
    const result=await Job.find({recruiterId:id});
    return JSON.parse(JSON.stringify(result))
}

//fetch job for user action
export async function fetchJobsForCandidateAction(){
    await connectDB();
    const result=await Job.find({});
    return JSON.parse(JSON.stringify(result))
}

//create job application
export async function createJobApplicationAction(formData,pathToRevalidate){
    await connectDB();
    const result=await Application.create(formData);
    revalidatePath(pathToRevalidate);
}



//fetch job application-candidate
export async function fetchJobApplicationForCandidateAction(candidateID){
    await connectDB();
    const result=await Application.find({candidateUserID:candidateID});
    return JSON.parse(JSON.stringify(result))
}

//fetch job application-recruiter
export async function fetchJobApplicationForRecruiterAction(recruiterID){
    await connectDB();
    const result=await Application.find({recruiterUserID:recruiterID});
    return JSON.parse(JSON.stringify(result))
}

//update the job application

//get candidate details by candidate ID
export async function getCandidateDetailsByAction(currentCandidateID){
    await connectDB();
    const result=await Profile.findOne({userId:currentCandidateID});
    return JSON.parse(JSON.stringify(result))
}