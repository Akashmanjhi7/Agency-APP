const z  = require('zod');

const contactSchema = z.object({
    username: z
    .string({required_error:"username is required"})  
    .trim()
    .min(3, {message : "username must be at least 3 characters long"})
    .max(255,  {message : "username must then 255  characters "}),

     email: z
    .string({required_error:"username is required"})  
    .email({message:"Invalid email address"})
    .trim()
    .min(3, {message : "username must be at least 3 characters long"})
    .max(255,  {message : "username must then 255  characters "}),

    message: z
    .string({required_error:"message is required"})  
    .trim()
    .min(10, {message : "message must be at least 10 characters long"})
    .max(500,  {message : "message must then 500  characters "}),
})


module.exports = contactSchema