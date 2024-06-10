require("dotenv").config()
const express = require("express");
const app = express();


const route =  require("./router/auth-router");
const connectDB = require("./utils/db");
app.use(express.json())
app.use("/api/auth", route)

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}/api/auth`);
})