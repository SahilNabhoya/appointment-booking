const mongoose = require("mongoose");

const MONGODB_URL =
    "mongodb+srv://shineshore1612:Shine_1612@appointment.uyt9hhh.mongodb.net";
const DB_NAME = "LifeCare";

 const connectDB = async () => {
    try {
        await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};


module.exports = connectDB
// module.exports = userSchema;