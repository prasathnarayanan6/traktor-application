client = require('../utils/conn');
const AddStartupModel = async() => {
    return new Promise((resolve, reject)=> {
        client.query("INSERT INTO add_startup(startup_name, sector, startup_type, startup_industry, startup_technology, program, cohort, official_contact_number, official_email_address, website_link, linkedin, mentor_associated, cin, password, founder_name, founder_email, founder_number, founder_gender, student_id, founder_linkedin, logo, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)", [startup_name, sector, startup_type, startup_industry, startup_technology, program, cohort, official_contact_number, official_email_address, website_link, linkedIn, mentor_associated, cin, password, founder_name, founder_email, founder_number, founder_gender, student_id, founder_linkedIn, choose_logo, description], 
          (err, result) => {
            if(err)
            {
                reject({err});
            }
            else
            {
                if(result)
                {
                    resolve(result);
                }
                else
                {
                    return "none";
                }
            }
          }  
        )
    })
}
const FilterStartupModel = () => {

}
module.exports = {AddStartupModel};