const client = require("../../utils/conn");
const AwsCreditsModel = async(team_email_encrypted, aws_startup_name, aws_email_encrypted, aws_description, final2, final) => {
    return new Promise((resolve, reject)=>{
        client.query(`INSERT INTO aws_applied(team_email, aws_startup_name, aws_email, aws_description, created_at, valid_till) VALUES($1, $2, $3, $4, $5, $6)`, [team_email_encrypted, aws_startup_name, aws_email_encrypted, aws_description, final2, final],(err, result)=> {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        })
    }) 
}

const ViewLastQueryTime = async(team_email) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT team_email, aws_email, status, valid_till AT TIME ZONE 'UTC' AS valid_till FROM aws_applied WHERE team_email=$1`, [team_email], (err, result)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(result)
            }
        })
    })
}
module.exports = {AwsCreditsModel, ViewLastQueryTime};