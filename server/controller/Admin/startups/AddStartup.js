// var EmailValid = require('../../../validation/EmailValid');

const {AddStartupModel} = require('../../../model/StartupModel');
const AddStartup = async(req, res) => {
    const {basic, official, founder, description} = req.body;

    const{startup_name, startup_program, startup_type, startup_industry, startup_tech, program, cohort} = basic;

    const{official_contact_number, official_email_address, website_link, linkedin_id, mentor_associated, registration_number, password} = official;

    const{founder_name, founder_email, founder_number, founder_gender, founder_student_id, linkedInid} = founder;

    const{logo_image, startup_description} = description;

    if(!startup_name || !official_email_address || !program || !official_contact_number || !description)
    {
        res.json("Please fill necessary fields");
    }
    else
    {
        try
        {
            const result = await AddStartupModel(basic, official, founder, description, official_email_address);
            res.status(200).send(result);
        }
        catch(err)
        {
            res.send(err);
        }
    }
}


module.exports = {AddStartup};