const validate = (schema) => async (req,res,next)=>{
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (error) {
        console.log(error.issues[0].message)
        const message = error.issues[0].message
        res.status(400).json({"msg" : message})
    }
} 

module.exports = validate