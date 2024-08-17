const client = require('../../utils/conn');
const AddMentorHourModel = async(team_mail, startup, mentor, date, time, description) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO mentor_schedule(team_mail, startup, mentor_mail, date, time, description) VALUES($1, $2, $3, $4, $5, $6)",[team_mail, startup, mentor, date, time, description], (err, result)=> {
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
module.exports = {AddMentorHourModel};