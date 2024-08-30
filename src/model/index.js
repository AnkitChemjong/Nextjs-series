import {Schema,model,models} from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema=new Schema({
    userName:String,
    email:String,
    password:String,
});

userSchema.pre('save',async function(next){
    console.log("hello world")
 const user=this;
 if(user.isModified('password')){
  const salt=await bcrypt.genSalt(10);
  console.log(salt,user.password);
  const hashedPassword=await bcrypt.hash(user.password,salt);
  this.password=hashedPassword;
 }
 next();
})

userSchema.static('checkLogin',async function(email,password){
    
})

const User=models.User||model('User',userSchema);
export default User;