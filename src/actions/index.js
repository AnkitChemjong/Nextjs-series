'use server'
import connectDB from '@/database';
import Profile from '@/models/profile.js';
import Job from '@/models/job.js';
import {revalidatePath} from 'next/cache'



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