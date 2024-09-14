import {Schema,models,model} from 'mongoose';

const applicationSchema=new Schema({
    recruiterUserID:String,
    name:String,
    email:String,
    candidateUserID:String,
    status:Array,
    jobID:String,
    jobAppliedDate:String,

});

const Application=models.Application||model('Application',applicationSchema);
export default Application;