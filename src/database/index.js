import mongoose from "mongoose";

const url=process.env.DB;

const connectToDB=async ()=>{
    await mongoose.connect(url).then(()=>{
        console.log("connected to the database");
    }).catch(err=>{
        console.log("error connecting to the database"+err.message);
    });
}


export default connectToDB;