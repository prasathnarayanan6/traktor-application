const { escape } = require('validator');
const EmailValid = require('../../../validation/EmailValid');
const PhoneNumberValid = require('../../../validation/PhoneNumberValid')
const {AddConnectionModel, ViewConnectionModel, EstablishConnectionModel}  = require('../../../model/ConnectionModel');
const AddConnections = async(req, res) => {
    const{name, designation, organisation, connect_for, contact_number, email_address} = req.body;
    if(!name || !designation || !organisation || !connect_for || !contact_number || !email_address)
    {
        res.status(400).json({Request: "Input data cannot be empty"});
    }
    else if(!EmailValid(email_address))
    {
        res.status(422).json({Request: "Not a valid email"})
    }
    else if(!PhoneNumberValid(contact_number))
    {
        res.status(403).json({Request: "Not a valid Phone number"})
    }
    else if(!EmailValid(email_address) && !PhoneNumberValid(contact_number))
    {
            res.status(402).json({Request: 'Check email and phone number'})
    }
    else
    {
        try
        { 
            const result = await AddConnectionModel(name, organisation, connect_for, contact_number, email_address, designation);
            res.status(200).json(result);
        }
        catch(err)
        {
            // console.log(err);
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

const ViewConnections = async(req, res) => {
    try
    {
        const result = await ViewConnectionModel();
        res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
    }
}
const EstablishConnection = async(req, res) => {
    try
    {
        const{startup, connection, email_content} = req.body;
        if(!startup || !connection || !email_content)
        {
            res.status(400).json({Request: "Input data cannot be empty"});
        }
        else
        {
            const result = EstablishConnectionModel(startup, connection, email_content);
            res.status(200).json(result);
        }
    }
    catch(err)
    {
        res.send(err);
    }
}
module.exports = {AddConnections, ViewConnections, EstablishConnection};