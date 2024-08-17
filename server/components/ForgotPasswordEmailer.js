const e = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const ForgotPassword = async(email_prompt) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "prasathnarayanan6@gmail.com",
            pass: process.env.PASS_KEY
        },
    });
    try
    {
        const info = await transporter.sendMail({
            from: '"Prasath" prasathnarayanan6@gmail.com',
            to:  email_prompt,
            subject: "Forgot Password - Reg", 
            text: "Dear" + email_prompt + "PFA, reset link", 
            // html: "<b>Thank You!</b>", 
          });
          console.log(info);
    }
    catch(err)
    {
        return err;
    }
}
module.exports = ForgotPassword;