const { errorMonitor } = require('node-cache');
const RaiseRequestModel = require('../../model/CustomerModel/RaiseRequestModel')
const RaiseRequest = async(req, res) => {
    const{team_mail, request_type, description} = req.body;
    try
    {
        if(!team_mail || !request_type || !description)
        {
            res.status(400).json({data: "Field should not be empty"});
        }
        else 
        {
            const result = await RaiseRequestModel(team_mail, request_type, description);
            res.send(result);
        }
    }
    catch(err)
    {
    
            if(err.code=="23505")
            {
                res.status(409).send("Error");
            }
            else 
            {
                res.status(201).send(err);
            }
    }
}
module.exports = RaiseRequest;