const { escape } = require('validator');
const EmailValid = require('../../../validation/EmailValid');
const {Decrypted} = require('../../../helpers/Encryption');
const PhoneNumberValid = require('../../../validation/PhoneNumberValid')
const {AddConnectionModel, ViewConnectionModel, EstablishConnectionModel, DeleteConnectionModel}  = require('../../../model/ConnectionModel');
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
    else
    {
        try
        { 
            const result = await AddConnectionModel(name, organisation, connect_for, contact_number, email_address, designation);
            res.status(200).json(result);
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
        const{startup, connection, email_content, user_role} = req.body;
        if(!startup || !connection || !email_content || !user_role)
        {
            res.status(400).json({Request: "Input data cannot be empty"});
        }
        else
        {
            const result = await EstablishConnectionModel(startup, connection, email_content, user_role);
            res.status(200).json(result);
        }
    }
    catch(err)
    {
        res.send(err);
    }
}

const DeleteConnection = async(req,res) => {
    try {
        let email_address = req.query.element_data;
        if(email_address)
        {
            const result = await DeleteConnectionModel(email_address);
            res.status(200).json(result);
        } else {
            res.status(400).send('Email address parameter is missing.');
        }
    }
    catch(err){
        console.error(err);
    }
}
module.exports = {AddConnections, ViewConnections, EstablishConnection, DeleteConnection};