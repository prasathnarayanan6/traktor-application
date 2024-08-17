const DeleteResumeModel = require("../../../model/DeleteResumeModel");

const DeleteResume = async(req, res) => {
    try
    {
        const {id} = req.params;
        // console.log(id);
        const result = await DeleteResumeModel(id);
        res.status(200).json(result);
    }  
    catch(err)
    {
        res.status(401).json(err);
    }  
}
module.exports = DeleteResume;