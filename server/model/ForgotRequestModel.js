const client = require('../utils/conn');
const nodemailer = require('nodemailer');
const ForgotPasswordEmailer = require("../components/ForgotPasswordEmailer");
const ForgotRequestModel = (email_prompt) => {
    return new Promise((resolve, reject)=>{
        client.query('SELECT user_mail FROM user_data WHERE user_mail=$1', [email_prompt], (err, result)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                if(result.rows.length > 0)
                {
                    try
                    {
                       const emailData = ForgotPasswordEmailer(email_prompt);
                       resolve(emailData);

                    }
                    catch(err)
                    {
                        console.log(err);
                    }

                }
                else
                {
                    resolve({Email_status: "Email does not exist! please provide valid email address"})
                }
            }
        })
    })
}
module.exports = ForgotRequestModel;