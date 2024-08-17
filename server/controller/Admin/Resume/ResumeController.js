const AwsModel = require('../../../model/AwsModel');
const ResumeController= async(req, res) => {
    const {filename} = req.params;
    if (filename) {
        try {
            const result = await AwsModel(filename);
            res.status(200).send(result.Body);  // Sending the body of the S3 response
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    } else {
        res.status(400).json({ error: "Filename not provided" });
    }
}
module.exports = ResumeController;