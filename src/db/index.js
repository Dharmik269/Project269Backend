import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB=async ()=>{
    try{
        const ConnectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connected successfully");
        console.log(`MongoDB Connected !!  connected Host: ${ConnectionInstance.connection.host}`);
    }
    catch(error){
        console.log("Error while connecting to database",error);
        process.exit(1);
    }
}

export default connectionDB;