const mongoose = require("mongoose");

// const URI = "mongodb+srv://shazamakash:Shazamwillrule1@mernstack.axecbgc.mongodb.net/";
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;

const connectDb = async() =>{

    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;