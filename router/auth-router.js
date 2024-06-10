 const express = require('express');
const authcontrolers = require('../controllers/auth-controller');

 const router  =  express.Router();

 router.get("/",authcontrolers.home)

router.route("/register").post(authcontrolers.register)


 
 module.exports = router;
 