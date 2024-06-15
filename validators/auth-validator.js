const z = require('zod') ;


// creating an object model
const signupSchema = z.object({
    username: z
    .string({required_error:"username is required"})  
    .trim()
    .min(3, {message : "username must be at least 3 characters long"})
    .max(255,  {message : "username must then 255  characters "}),

    email: z
    .string({required_error:" Email is required"})
    .trim()
    .email({"message" : "Invalid email address"})
    .min(3,{"message" : "email must be at least 3 characters long"}),

    password: z
    .string({required_error:"password is required"})  
    .trim()
    .min(8, {message : "password must be at least 8 characters long"})
    .max(255,  {message : "password must then 255  characters "}),

    phone: z
    .string({required_error:"phone is required"})  
    .trim()
    .min(10, {message : "phone must be at least 10 characters long"})
    .max(20,  {message : "username must then 20  characters "}),

}) 

const loginSchema = z.object({
    email: z
    .string({required_error:" Email is required"})
    .trim()
    .email({"message" : "Invalid email address"})
    .min(3,{"message" : "email must be at least 3 characters long"}),

    password: z
    .string({required_error:"password is required"})  
    .trim()
    .min(8, {message : "password must be at least 8 characters long"})
    .max(255,  {message : "password must then 255  characters "}),

})



module.exports = {signupSchema, loginSchema};