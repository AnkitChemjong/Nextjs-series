import mongoose from 'mongoose';

const DbUrl=process.env.DB;

const connectToDb=async()=>{

    await mongoose.connect(DbUrl).then(()=>{
        console.log("Connected to Database")
    }).catch((error)=>{
        console.log("Cannot connect to database"+error.message)
    })
}

export default connectToDb;

