const client = require('../utils/conn');
const JobModel = async(role, duration, jobtype, remuneration, requirements, description) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO add_job(email, role, duration, jobtype, remuneration, requiremneets, description) VALUES($1, $2, $3, $4, $5, $6, $7)",[email, role, duration, jobtype, remuneration, requirements, description], (err, result)=> {
            if(err)
            {
                reject(err);
            }
            else
            {
                 if(result)
                {
                    resolve({status: "Data inserted successfuly"});
                }
                else
                {
                    resolve({status: "Not inserted"});
                }
            }
        })
    })
}
module.exports = JobModel