const AddJobModel = require('../../model/CustomerModel/AddJobModel');
const AddJob = async(req, res) => {
    const{team_mail, role, duration, job_type, renumeration, requirements, description} = req.body
    if(!team_mail || !role || !duration || !job_type || !renumeration || !requirements || !description)
    {
        res.status(401).json({error: 'Missing required fields'});
    }
    else
    {
        try
        {
            const result = await AddJobModel(team_mail, role, duration, job_type, renumeration, requirements, description);
            res.status(200).json({data: result});
        }
        catch(err)
        {
            res.status(500).send({err});
        }
    }
}
module.exports = AddJob;