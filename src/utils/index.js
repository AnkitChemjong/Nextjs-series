export const recruiterOnBoardFormControls=[
    {
    Label:'Name',
    name:"name",
    componentType:"input",
    placeholder:'Enter your name'

},
{
    Label:'Company Name',
    name:"companyName",
    componentType:"input",
    placeholder:'Enter your company name'

},
{
    Label:'Company Role',
    name:"companyRole",
    componentType:"input",
    placeholder:'Enter your company role'

},

]

export const initialRecruiterFormData={
    name:"",
    companyName:"",
    companyRole:"",
  
}
export const candidateOnBoardFormControls=[
    {
        label:'Resume',
        name:"resume",
        componentType:"file",
    },
    {
        label:"Name",
        name:"name",
        placeholder:"Enter your name",
        componentType:"input",
    },
    {
        Label:'Current Company',
        name:"currentCompany",
        componentType:"input",
        placeholder:'Enter your current company'
    
    },
    {
        Label:'Current Job Location',
        name:"currentJobLocation",
        componentType:"input",
        placeholder:'Enter your current job location'
    
    },
    {
        Label:'Preferred Job Location',
        name:"preferredJobLocation",
        componentType:"input",
        placeholder:'Enter your preferred Job Location'
    
    },
    {
        Label:'Current Salary',
        name:"currentSalary",
        componentType:"input",
        placeholder:'Enter your current salary'
    
    },
    {
        Label:'Notice Period',
        name:"noticePeriod",
        componentType:"input",
        placeholder:'Enter your notice period'
    
    },
    {
        Label:'Skills',
        name:"skills",
        componentType:"input",
        placeholder:'Enter your skills'
    
    },
    
    {
        Label:'Previous Companies',
        name:"previousCompanies",
        componentType:"input",
        placeholder:'Enter your previous companies'
    
    },
    {
        Label:'Total Experience',
        name:"totalExperience",
        componentType:"input",
        placeholder:'Enter your total experience'
    
    },
    {
        Label:'College',
        name:"college",
        componentType:"input",
        placeholder:'Enter your college'
    
    },
    {
        Label:'College Location',
        name:"collegeLocation",
        componentType:"input",
        placeholder:'Enter your college location'
    
    },
    {
        Label:'Graduated Year',
        name:"graduatedYear",
        componentType:"input",
        placeholder:'Enter your graduated year'
    
    },
    {
        Label:'LinkedIn Profile',
        name:"linkedInProfile",
        componentType:"input",
        placeholder:'Enter your linkedIn profile'
    
    },
    {
        Label:'Github Profile',
        name:"githubProfile",
        componentType:"input",
        placeholder:'Enter your github profile'
    
    },
]

export const initialCandidateFormData={
    resume:null,
    name:'',
    currentJobLocation:'',
    preferredJobLocation:'',
    currentSalary:'',
    noticedPeriod:'',
    skills:'',
    currentCompany:'',
    previousCompanies:'',
    totalExperience:'',
    college:'',
    collegeLocation:'',
    graduatedYear:'',
    linkedInProfile:'',
    githubProfile:'',
}

export const postNewJobFormControls=[
    {
    label:"Company Name",
    name:"companyName",
    placeholder:"Company Name",
    componentType:'input',
    disabled:true

},{
    label:"Title",
    name:"title",
    placeholder:"Job Title",
    componentType:'input'

},
{
    label:"Type",
    name:"type",
    placeholder:"Job Type",
    componentType:'input'

},
{
    label:"Location",
    name:"location",
    placeholder:"Location",
    componentType:'input'

},
{
    label:"Experience",
    name:"experience",
    placeholder:"Company Name",
    componentType:'input'

},
{
    label:"Description",
    name:"description",
    placeholder:"Job Description",
    componentType:'input'

},
{
    label:"Skills",
    name:"skills",
    placeholder:"Required Skills",
    componentType:'input'

}

]

export const initialPostNewJobFormData={
companyName:'',
title:'',
type:'',
location:'',
experience:'',
description:'',
skills:'',

}
