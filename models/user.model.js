const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})


userSchema.pre('save', async function (next){

    if(!this.modified){
        this.password = await bcrypt.hash(this.password, 10);
        next()
    }
})

userSchema.methods.ispasswordValid = async function(password){
    return bcrypt.compare(password ,this.password)
}



userSchema.methods.genrateToken = function (){
    try {
        return jwt.sign({
            userid : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_SECRET_KEY_EXPIRY
        }
    )
    } catch (error) {
        console.error(error)
    }
}


 const User = mongoose.model("User",userSchema)
 module.exports = User;  