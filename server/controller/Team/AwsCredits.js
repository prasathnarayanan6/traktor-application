const {AwsCreditsModel, ViewLastQueryTime} = require('../../model/CustomerModel/AwsCreditsModel');
const EmailValid = require('../../validation/EmailValid');
const {Encryption, Decrypted} = require('../../helpers/Encryption.js');
let currentDatetime = new Date();
let istOffset = 5.5 * 60 * 60 * 1000; 
let currentDatetimeIST = new Date(currentDatetime.getTime() + istOffset);
let newDatetimeIST = new Date(currentDatetimeIST.getTime() + 24 * 60 * 60 * 1000);
let current_time = new Date(currentDatetimeIST.getTime() + 60 * 60 * 1000);
let final2 = current_time.toISOString().replace('T', ' ').replace('Z', ' ');
let final = newDatetimeIST.toISOString().replace('T', ' ').replace('Z', ' ');

const AwsCredits = async(req, res) => {
    const{team_email, aws_startup_name, aws_email, aws_description} = req.body;  
    if(!team_email || !aws_startup_name || !aws_email || !aws_description)
    {
        res.status(400).json  ({data: "Please Enter proper data"});
    }
    else
    {
        if(!EmailValid(team_email) || !EmailValid(aws_email))
        {
            res.status(401).json({data: "Email is not Valid"});
        }
        else
        {  
            let team_email_encrypted = Encryption(team_email);
            let aws_email_encrypted = Encryption(aws_email);
            res.cookie('data', {team_email_encrypted, aws_email_encrypted}, {maxAge: 86400000, httpOnly: true});
           try
           {
                const result = await ViewLastQueryTime(team_email);  
                if(result.rows.status == "pending")
                {
                    res.status(402).json({response: "Request already raised"});
                }
                else
                {
                    const result2 = await AwsCreditsModel(team_email_encrypted, aws_startup_name, aws_email_encrypted, aws_description, final2, final);
                    res.status(200).json({result2});
                }
           }
           catch(err)
           {
               
               if(err.code=="23505")
               {
                   res.status(409).send("Tried to insert it");
               }
               else 
               {
                   res.status(406).send(err);
               }
           }
        }
    }
}
module.exports = AwsCredits;