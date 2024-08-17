const client = require('../utils/conn');
const AddMentorModel = (mentor_id, 
                  mentor_name, 
                  mentor_logo, 
                  mentor_description, 
                  experienced_years, 
                  area_of_expertise, 
                  current_designation, 
                  Institution, 
                  Qualification,
                  Year_of_passing_out,
                  startup_associated,
                  contact_number,
                  email_address,
                  linkedIn, 
                  password, hashkey ) => {
                    return new Promise((resolve, reject)=>{
                        client.query("INSERT INTO add_mentor(mentor_id, mentor_name, mentor_logo, mento_description, years_of_exp, area_of_expertise, designation, institution, qualification, year_of_passing_out, startup_assoc, contact_num, email_address, linkedIn_id, password, hashkey) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)", [mentor_id, mentor_name, 
                            mentor_logo, 
                            mentor_description, 
                            experienced_years, 
                            area_of_expertise, 
                            current_designation, 
                            Institution, 
                            Qualification,
                            Year_of_passing_out,
                            startup_associated,
                            contact_number,
                            email_address,
                            linkedIn, 
                            password, 
                            hashkey], 
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
module.exports = AddMentorModel;