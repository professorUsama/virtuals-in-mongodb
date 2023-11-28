import ENV from "./keys.config.js";
import mongoose from "mongoose";

const DB = async () =>{
    try {
        await mongoose.connect(ENV.MONGODB.URL);
        console.log("MongoDB connect successfull...");
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
};

export default DB;