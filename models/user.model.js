const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
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


 const User = mongoose.model("User",userSchema)
 module.exports = User;  