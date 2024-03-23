//refers to a part of your code, that is responsible for 
//handling the application's logic. Helps organising the code
require('dotenv').config();
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
//home page logic

const home = async(req,res)=>{
    try {
        res
        .status(200)
        .send('Welcome to the Page using Controller');
    } catch (error) {
        // console.log(error);
        next(error);
    }
};

//registration logic

const register  = async(req,res) =>{
    try {
        console.log(req.body);
        const {username, email, phone , password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"Email already Exist"});
        }

        // //hash the password
        // const saltRound = Number(process.env.SALT);
        // const hash_password = await bcrypt.hash(password,saltRound);

       const userCreated =  await User.create({
            username, 
            email, 
            phone , 
            password,
        });

        // res.status(200).send("Welcome to the Registration Page using Controller");
        res.status(201).json({msg : "Registration Successful" , 
            token: await userCreated.generateToken() ,
            userId : userCreated._id.toString()
        });
    } catch (error) {
    //    res.status(500).json("internal server error");
        next(error);
    }
}

//converting jwt is converted to string is a good practice


//user login logic

const login = async(req,res) =>{
    try {
        const {email,password} = req.body;

        const userExist =await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        //compare password

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                msg : "Login Successful" , 
                token: await userExist.generateToken() ,
                userId : userExist._id.toString()
             });
        }else{
            res.status(401).json({message:"Invalid Email or Password"});
        }

    } catch (error) {
        // res.status(500).json("Internal Server Error");
        next(error);
    }
};

module.exports =  {home , register , login};