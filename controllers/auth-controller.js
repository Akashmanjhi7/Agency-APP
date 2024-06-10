
const userModel = require("../models/user.model")


//  Home Controller

const home = async (req,res)=>{
    try {
        res.status(200).send("Welcome to our login page ")
    } catch (error) {
        console.log(error)
    }
}

//  Register Controllers
const register = async (req,res)=>{
    try {

        const {username,email,phone ,password} = req.body;

        const userExist =  await userModel.findOne({email})

        if(userExist){
            res.status(400).json({msg: "email already exist"})
        }

      const user = await userModel.create({
            email,password,phone,username
        })

        console.log("user is created")
        res.status(201).json({user : user })

    } catch (error) {
        console.log(error)
    }
}


module.exports = {home , register}