import mongoose from "mongoose";
import config from "config";

const mongoURL = config.get("mongoURL");

const connectToDB = async () => {
    try {
        mongoose.connect(mongoURL);
        console.log("Connection succesfull!");
    } catch (error) {
        console.log(error);

    }
}

export default connectToDB;