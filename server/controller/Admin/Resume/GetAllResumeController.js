const GetAlldataModel = require('../../../model/GetAlldataModel');
const GetAllResumeController = async(req,res) => {
    try {
        const result = await GetAlldataModel();
        res.status(200).json({ result });
      } catch (error) {
        if (error.code === 'AccessDenied') {
          res.status(403).json({ error: 'Access denied to S3 bucket' });
        } else if (error.code === 'NoSuchBucket') {
          res.status(404).json({ error: 'S3 bucket not found' });
        } else {
          res.status(500).json({ error: 'An error occurred while fetching data' });
        }
    }
}
module.exports = GetAllResumeController;