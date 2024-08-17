const WorkRequestModel = require('../../../model/WorkRequestModel');
const WorkRequestController = async(req, res) => {  
    try
    {
        const{data} = req.body;
        res.status(200).json({data: data});
    }
    catch(error)
    {   
        res.status(200).json({error: error});
    }   
}
module.exports = WorkRequestController;