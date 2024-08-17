const { escape } = require('validator');
const {AddConnectionModel, ViewConnectionModel, EstablishConnectionModel}  = require('../../../model/ConnectionModel');
const AddConnections = async(req, res) => {
    const{add_connection_name, add_connection_organization, add_connection_connect_for, add_connection_contact_number, add_connection_email_address, add_connection_designation} = req.body;
    if(!add_connection_name || !add_connection_organization || !add_connection_connect_for || !add_connection_contact_number || !add_connection_email_address || !add_connection_designation)
    {
        res.status(400).json({Request: "Bad request"});
    }
    else
    {
        try
        { 
            const result = await AddConnectionModel(add_connection_name, add_connection_organization, add_connection_connect_for, add_connection_contact_number, add_connection_email_address, add_connection_designation);
            res.status(200).json(result);
        }
        catch(err)
        {
            console.log(err);
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
            res.send('data');
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