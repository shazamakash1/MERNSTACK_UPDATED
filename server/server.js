require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

//implementing CORS - handling the issue

const corsOptions = {
    origin: process.env.FRONTEND_ORIGIN,
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions));

app.use(express.json()); //adds an express middleware, will handle json request body
//Mount the router to the app, also use mount 
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT;

connectDb().then(() =>{
    app.listen(PORT , ()=>{
        console.log(`Server is running at port ${PORT}`);
    }); 
});