import dotenv from "dotenv";
dotenv.config({path: "./.env"});

export default {
    PORT: process.env.PORT || 2000,
    MONGODB: {
        URL: process.env.CONNECTION_STRING,
    }
}