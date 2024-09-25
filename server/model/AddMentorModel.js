const client = require('../utils/conn');
const AddMentorModel = (mentor_name, mentor_description, years_of_experience, area_of_expertise, current_designation, institution, qualification, year_of_passing_out, startup_associated, contact_number, email_address, linkedIn_ID, password) => {
                    return new Promise((resolve, reject)=>{
                        client.query("INSERT INTO add_mentor(mentor_id, mentor_name, mentor_logo, mento_description, years_of_exp, area_of_expertise, designation, institution, qualification, year_of_passing_out, startup_assoc, contact_num, email_address, linkedIn_id, password, hashkey, user_role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)", [ 
                           '1', mentor_name, '1', mentor_description, years_of_experience, area_of_expertise, current_designation, institution, qualification, year_of_passing_out, startup_associated, contact_number, email_address, linkedIn_ID, password, '1', '1'], 
                            (err, result) => {
                                if(err)
                                {
                                    reject({STATUS : err})
                                }
                                else
                                {
                                     resolve({STATUS: result});
                                }
                            }
                        )
                    })
}

const FetchMentorDataModel = () =>{
        return new Promise((resolve, reject) => {
            client.query("SELECT * FROM add_mentor", (err, result)=> {
                if(err)
                {
                    reject({STATUS: err})
                }
                else
                {
                    resolve({STATUS: result});
                }
            })
        })
}
const MentorCountData = () => {
    return new Promise((resolve, reject) => {
        client.query("SELECT COUNT(email_address) AS count FROM add_mentor", (err, result) => {
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

const MentorDeleteData = (email_address) => {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM add_mentor WHERE email_address=$1`, [email_address], (err, result) => {
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


const MentorScheduleModel = (select_startup, select_mentor, schedule_date, schedule_time, description) => {
    return new Promise((resolve, reject) => {
        client.query('INSERT INTO mentor_schedule (startup, mentor_mail, date, time, description) VALUES ($1, $2, $3, $4, $5)', [select_startup, select_mentor, schedule_date, schedule_time, description],
            (err, result) => {
                if(err)
                {
                    reject(err)
                }
                else {
                    resolve(result);
                }
            }
        )
    })
}
module.exports = {AddMentorModel, FetchMentorDataModel, MentorCountData, MentorDeleteData, MentorScheduleModel};