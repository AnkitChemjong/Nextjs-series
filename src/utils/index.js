

export const addNewUserFormControls=[
    {
    name:'firstName',
    label:'First Name',
    placeHolder:"Enter your first name"
    ,type:"input"
   },
   {
    name:'lastName',
    label:'Last Name',
    placeHolder:"Enter your last name"
    ,type:"input"
   },
   {
    name:'email',
    label:'Email',
    placeHolder:"Enter your email"
    ,type:"email"
   },
   {
    name:'address',
    label:'Address',
    placeHolder:"Enter your address"
    ,type:"input"
   }


]

export const userInitialState={
    firstName:'',
    lastName:'',
    email:'',
    address:''
}