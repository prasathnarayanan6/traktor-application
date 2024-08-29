const md5 = require('md5');
const {AddMentorModel} = require('../../../model/AddMentorModel');
const { ExpressValidator, check, checkExact } = require('express-validator');
const validator = require('validator');
const EmailValid = require('../../../validation/EmailValid');
const PhoneNumberValid = require('../../../validation/PhoneNumberValid');
const AddMentor = async(req, res) => {
    const { description, professional, contact } = req.body;
    const { mentor_name, mentor_description } = description;
    const { years_of_experience, area_of_expertise, current_designation, institution, qualification, year_of_passing_out, startup_associated } = professional;
    const { contact_number, email_address, linkedIn_ID, password } = contact;
    if (!mentor_name || !contact_number || !email_address || !password) 
    {
        return res.status(400).send('All fields are required');
    }
    else if(!EmailValid(email_address))
    {
        return res.status(401).send("Email is not Valid");
    }
    else if(!PhoneNumberValid(contact_number))
    {
        return res.status(402).send('Phone number is not valid');
    }
    else {
        try
        {
            const result = await AddMentorModel(mentor_name, mentor_description, years_of_experience, area_of_expertise, current_designation, institution, qualification, year_of_passing_out, startup_associated, contact_number, email_address, linkedIn_ID, password);
            res.send(result);
        }
        catch(err)
        {
                if(err.code='23505')
                {
                    res.status(409).json({Error: "Contact number already exists" })
                }
                else {
                    console.log(err);
                    res.status(500).json({Error: "Internal Server Error"});
                }
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