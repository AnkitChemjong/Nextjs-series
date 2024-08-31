import mongoose from "mongoose";

const DB_URL=process.env.DB;

async function connectToDB(){
    try{
          await mongoose.connect(DB_URL).then(()=>{
            console.log("Connected to database");
          }).catch(e=>{ console.log("can't connect to database"+e.message)});
    }
    catch(e){
        console.log("can't connect to database"+e.message)
    }

}

export default connectToDB;