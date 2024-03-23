const {z} = require("zod");

//creating an object schema

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, { message:"Name must be atleast 3 Characters."})
    .max(255,{message:"Name must not be more than 255 Characters."}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3, { message:"Email must be atleast 3 Characters."})
    .max(255,{message:"Email must not be more than 255 Characters."}),

    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, { message:"Phone must be atleast 10 Characters."})
    .max(20,{message:"Phone must not be more than 20 Characters."}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(6, { message:"Password must be atleast 6 Characters."})
    .max(1024,{message:"Password must not be more than 1024 Characters."}),
});

module.exports = signupSchema;