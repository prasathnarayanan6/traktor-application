const client = require('../../utils/conn.js');
const TeamMemberModel = (team_name, team_email, team_number, team_designation) => {
    return new Promise((resolve, reject)=>{
        client.query(`INSERT INTO team_member_details(team_name, team_email, team_number, team_designation) VALUES($1, $2, $3, $4)`, [team_name, team_email, team_number, team_designation], (err, result)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(result); 
            }
        })
    })
}

const TeamMemberView = () => {
    return new Promise((resolve, reject)=> {
        client.query('SELECT * FROM team_member_details', (err, result)=>{
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
module.exports = {TeamMemberModel, TeamMemberView};