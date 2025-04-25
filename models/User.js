import {Schema,model} from "mongoose";

const UserSchema=new Schema({
  _id:{
    type:String,
    required:true
  },
  name:{type:String,required:true},
  email:{type:String,required:true},
  image:{type:String,required:false},
},{timestamps:true});

const User=mongoose.models.User||model('User',UserSchema);
export default User;
