const bcrypt = require('bcrypt');
const userModel = require("../models/user.model")


//  Home Controller

const home = async (req, res) => {
    try {

        res.status(200).send("Welcome to our login page ")
    } catch (error) {
        console.log(error)
    }
}

//  Register Controllers
const register = async (req, res,next ) => {

    try {

        const { username, email, phone, password } = req.body;

        const userExist = await userModel.findOne({ email })

        if (userExist) {
            res.status(400).json({ msg: "email already exist" })
        }

        const userCreated = await userModel.create({
            email, password, phone, username
        })

        console.log("user is created")
        res.status(201).json({ msg: "Registration sucessfull", token: userCreated.genrateToken(), userId: userCreated._id.toString() })

    } catch (error) {
        next(error)
    }
}


const login = async (req, res,next) => {

    try {
        const { email, password } = req.body;

        const userExist = await userModel.findOne({ email });

        if (!userExist) {
            res.status(400).json({ msg: "Invalid email or password" })
        }
 
        const passwordValid = await userExist.ispasswordValid(password)

        if (passwordValid) {
            res.status(200).json({
                msg: "Login Sucessfull",
                token: userExist.genrateToken(),
                userId: userExist._id.toString()
            })
        }
        else {
            res.status(401).json({ msg: "Invalid email or password" })
        }

    } catch (error) {
        next(error)
    }
}


module.exports = { home, register, login }