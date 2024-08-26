import {Schema,model} from 'mongoose';


const blogSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Blog=model("Blog",blogSchema);

export default Blog;