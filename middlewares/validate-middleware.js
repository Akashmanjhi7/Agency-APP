const validate = (schema) => async (req,res,next)=>{
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (error) {
        console.log(error.issues[0].message)
        const status = 422 ;
        const message  = "Fill Inputs Properly";
        const extraDetails = error.issues[0].message

        const errors = {
            status, 
            message,
            extraDetails
        }

        next(errors)
    }
} 

module.exports = validate