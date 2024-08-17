const ResumeData = require('../../../model/ResumeData');
const ResumeFetchController = async(req, res) => 
{
    try
    {
        const {page_data} = req.params;
        let page_number = req.params.page_number
        const result = await ResumeData(page_data, page_number);   
        res.send(result);
    }
    catch(err)
    {
        res.send(err);
    }
}

module.exports = ResumeFetchController;