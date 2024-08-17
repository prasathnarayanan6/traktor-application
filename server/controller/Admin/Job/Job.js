// const JobModel = require("../../model/jobModel")
const job = async(req, res) => {
    try 
    {
        const {role, duration, jobtype, remuneration, requirements, description} = req.body;
        // res.send(remuneration);
        const result = await JobModel(role, duration, jobtype, remuneration, requirements, description);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
module.exports = job;