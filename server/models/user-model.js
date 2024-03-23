const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

//securing the password

//pre runs the data before saving it to the db
userSchema.pre('save', async function(next){
    // console.log("Pre Method --> ",this);
    const user = this;

    if(!user.isModified('password')){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(Number(process.env.SALT));
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }

});

//jwt -> json web token - Securely parse information between two parties
// used for authorization and authentication.
// it is not stored in db, it is stored as cookies or local storage for later use

//json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email: this.email,
            isAdmin : this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:'30d',
        }
        );
    } catch (error) {
        console.error(error);
    }
};

//compare the password

userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password, this.password);
};

//define the model or the collection name

const User = new mongoose.model("User",userSchema);

module.exports = User;