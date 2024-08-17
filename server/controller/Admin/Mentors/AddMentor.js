const md5 = require('md5');
const AddMentorModel = require('../../../model/AddMentorModel');
const { ExpressValidator, check, checkExact } = require('express-validator');
const validator = require('validator');
const AddMentor = async(req, res) => {
    const {mentor_name, 
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
        password } = req.body;
        const hashkey = md5(email_address);
        const mentor_id = randomString(8);
        if(!mentor_id || !mentor_name || !mentor_logo || !mentor_description || !experienced_years || !area_of_expertise || !current_designation || !Institution || !Qualification || !Year_of_passing_out || !startup_associated || !contact_number || !email_address || !linkedIn || !password)
        {
            res.status(400).json({data : "Fields are missing" });
        }
        else 
        {
            try
            {
                if(mentor_id && mentor_name && mentor_logo && mentor_description && experienced_years && area_of_expertise && current_designation && Institution && Qualification && Year_of_passing_out && startup_associated && contact_number && email_address && linkedIn && password)
                {
                    if(validator.isEmail(email_address))
                    {
                        const result = await AddMentorModel(mentor_id, mentor_name, mentor_logo, mentor_description, experienced_years, area_of_expertise, current_designation, Institution, Qualification, Year_of_passing_out, startup_associated, contact_number, email_address, linkedIn, password, hashkey);
                        res.status(200).json({result});
                    }
                }
                else{
                   console.log("ehll")
                }
            }
            catch(err)
            {
                res.status(400).json(err);
            }
        }
}
const randomString = (length) => {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if(!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    var str = '';
    for(var i = 0; i < length; i++){
        str +=chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
module.exports = AddMentor; 