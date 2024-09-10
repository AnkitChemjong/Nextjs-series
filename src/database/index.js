import mongoose from 'mongoose';

const connectionURL=process.env.DBURL;

export default async function connectDB(){
    await mongoose.connect(connectionURL).then(()=>{
        console.log("Connected to the database")
    }).catch(error=>console.log("error on connecting"+error));
    
}