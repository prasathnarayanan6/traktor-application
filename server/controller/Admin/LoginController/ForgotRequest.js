const ForgotRequestModel = require('../../../model/ForgotRequestModel')
const ForgotRequest = async(req,res) => {
    try
    {
        const{email_prompt} = req.body
        const result = await ForgotRequestModel(email_prompt);
        res.send(result);
    }
    catch(err)
    {
        throw err;
    }
}
module.exports = ForgotRequest;