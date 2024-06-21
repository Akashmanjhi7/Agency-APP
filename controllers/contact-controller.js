const Contact = require("../models/contact-model");

const contactForm = async(req, res, next)=>{
    try {
        const response = req.body;

      const contactCreated =  await Contact.create(response)

    console.log(contactCreated)
    res.send("Contact saved sucessfully")

    } catch (error) {
        next(error)
    }
}

module.exports = contactForm