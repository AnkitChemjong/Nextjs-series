
export const formControls=[
    {
    name:'userName',
    label:'User Name',
    placeholder:"Please enter your username",
    componentType:'input',
    type:'text'
    },
    {
        name:'email',
        label:'Email',
        placeholder:"Please enter your email",
        componentType:'input',
        type:'email'
        },
        {
            name:'password',
            label:'Password',
            placeholder:"Please enter your password",
            componentType:'input',
            type:'password'
            },

]
export const initialState={
    userName:'',
    email:'',
    password:''
}