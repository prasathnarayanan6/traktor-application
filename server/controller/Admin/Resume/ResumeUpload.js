const ResumeUploadModel = require('../../../model/ResumeUploadModel');
const ResumeUpload = async (req, res) => {
    const {name, year, email, department, college, url} = req.body;
    try
    {
        const result = await ResumeUploadModel(name, email, college, department, url, year);
        res.status(200).json({result});
    }
    catch(err)
    {
        console.log(err);
        throw err;
    }
    //res.status(200).json(req.body);
    
}
module.exports = ResumeUpload;