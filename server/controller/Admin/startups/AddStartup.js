// var EmailValid = require('../../../validation/EmailValid');
const AddStartup = async(req, res) => {
    const {startup_name, sector, startup_type, startup_industry, startup_technology, program, cohort, official_contact_number, official_email_address, website_link, linkedIn, mentor_associated, cin, password, founder_name, founder_email, founder_number, founder_gender, student_id, founder_linkedIn, choose_logo, description} = req.body;
    try
    {
        if(!official_email_address || !program || !official_contact_number || !description)
        {
            res.json("Please fill necessary fields");
        }
        // else if(official_email_address)
        // {
        //     res.json(EmailValid(official_email_address));
        // }
        else
        {
            
        }
         
    }
    catch(err)
    {
        res.send(err);
    }
}


module.exports = AddStartup;