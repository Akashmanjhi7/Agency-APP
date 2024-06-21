const express = require('express');
const contact = require('../controllers/contact-controller');
const validate = require('../middlewares/validate-middleware');
const contactSchema = require('../validators/contact-validator');
const router = express.Router()


router.route("/contact")
.post(validate(contactSchema),   contact)

module.exports = router