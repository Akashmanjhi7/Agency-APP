const express = require('express');
const authcontrollers = require('../controllers/auth-controller');
const validate = require('../middlewares/validate-middleware');
const {signupSchema} = require('../validators/auth-validator');
const {loginSchema} = require('../validators/auth-validator');



const router = express.Router();

router.get("/", authcontrollers.home);

router.route("/register")
    .post(validate(signupSchema) , authcontrollers.register)


router.route("/login")
    .post(validate(loginSchema) , authcontrollers.login)
    

module.exports = router;
