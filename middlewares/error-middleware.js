const errorMidleware = (error , req,res, next)=>{
    const status = error.status || 500;
    const message = error.message || "Something Went Wrong";
    const extraDetails = error.extraDetails || "Error From Backend"


    return res.status(status).json({status, message, extraDetails})
};


module.exports = errorMidleware;