

import {Schema,model,models} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret=process.env.secret_key;


const userSchema=new Schema({
    userName:String,
    email:String,
    password:String,
});

userSchema.pre('save',async function(next){
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
    const checkUser=await this.findOne({email})
    if(checkUser){
        const match=await bcrypt.compare(password,checkUser.password);
        if(match){
            const payload={id:checkUser._id,userName:checkUser.userName,email:checkUser.email};
            const token=jwt.sign(payload,secret,{expiresIn:"1d"});
            return {
                success: true,
                message:"Login successfully",
                data:token,
                user:JSON.parse(JSON.stringify(checkUser))
            }
        }
        else{
            return {
                success: false,
            message:"Password is incorrect",
            data:null
            }
        }
    }
    else{
        return {
            success: false,
            message:"User Does not exist",
            data:null
        } 
    }
    
})

const User=models.User||model('User',userSchema);
export default User;