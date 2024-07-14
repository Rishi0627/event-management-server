const mongoose = require('mongoose');
// require("dotenv").config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongoDB");

    } catch (error) {
        console.log("Error in connecting MongoDB:", error);
    }


};

module.exports = {connectMongoDB};