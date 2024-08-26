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
});

const Blog=model("Blog",blogSchema);

export default Blog;