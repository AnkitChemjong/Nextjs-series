import {Schema,models,model} from 'mongoose';


const profileSchema=new Schema({
    userId:String,
    role:String,
    email:String,
    isPremiumUser:Boolean,
    memberShipType:String,
    memberShipStartDate:String,
    memberShipEndDate:String,
    recruiterInfo:{
        name:String,
        companyName:String,
        companyRole:String

    },
    candidateInfo:{
        name:String,
        currentJobLocation:String,
        preferredJobLocation:String,
        currentSalary:String,
        noticePeriod:String,
        skills:String,
        currentCompany:String,
        previousCompanies:String,
        totalExperience:String,
        college:String,
        collegeLocation:String,
        graduatedYear:String,
        linkedInProfile:String,
        githubProfile:String,
        resume:String
    }

})

const Profile=models.Profile||model('Profile',profileSchema);
export default Profile;