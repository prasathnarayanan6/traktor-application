const client = require('../../utils/conn');
const AddJobModel = (team_mail, role, duration, job_type, renumeration, requirements, description) => {
    return new Promise((resolve, reject)=>{
        client.query(`INSERT INTO add_job(email, role, duration, jobtype, remuneration, requirements, description) VALUES($1, $2, $3, $4, $5, $6, $7)`, [team_mail, role, duration, job_type, renumeration, requirements, description], (err, result)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result)
            }
        })
    })
}
module.exports = AddJobModel;