import {Schema,models,model} from 'mongoose';

const jobSchema=new Schema({
companyName:String,
title:String,
location:String,
type:String,
experience:String,
description:String,
skills:String,
recruiterId:String,
applicants:[
    {
        name:String,
        email:String,
        userId:String,
        status:String
    }
]
})
const Job=models.Job||model('Job',jobSchema);
export default Job;