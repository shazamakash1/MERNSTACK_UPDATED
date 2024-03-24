
const validate = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        // console.log(err);
        const message ="Fill the Required Inputs";
        const extraDetails = err.errors[0].message;
        const status = 422;
        const error = {
            status,
            message,
            extraDetails,
        };

        // console.log(message);
        // res.status(400).json({msg:message});
        next(error);
    }
};

module.exports = validate;