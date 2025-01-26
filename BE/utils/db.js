import mongoose from "mongoose";

const dbConn = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("DB Connected successfully");
    }catch(err){
        console.log(err);
    }
}
export default dbConn;