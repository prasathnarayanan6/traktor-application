const client = require("../utils/conn");
const AddConnectionModel = async(add_connection_name, add_connection_organization, add_connection_connect_for, add_connection_contact_number, add_connection_email_address,  add_connection_designation) => {
    return new Promise((resolve, reject) => {
        client.query("INSERT INTO establish_connections(connection_name, organization, connect_for, contact_number, email_address, connection_desig) VALUES($1, $2, $3, $4, $5, $6)", [add_connection_name, add_connection_organization, add_connection_connect_for, add_connection_contact_number, add_connection_email_address, add_connection_designation],
        (err, result)=>{
            if(err)
            {
                reject({err})
            }
            else
            {
                if(result) 
                {
                    resolve(result);
                }
                else
                {
                    reject("Bug");
                }
            }
        })
    })
}

const ViewConnectionModel = async() => {
    return new Promise((resolve, reject)=>{
        client.query("SELECT * FROM establish_connections", (err, result) => {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}

const EstablishConnectionModel = async(startup, connection, email_content) => {
    return new Promise((resolve, reject)=>{
        client.query("INSERT INTO tag_connection(startup_team, connection, email_content) VALUES($1, $2, $3)", [startup, connection, email_content], (err, result)=> {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(result);
            }
        })
    })
}
module.exports = {AddConnectionModel, ViewConnectionModel, EstablishConnectionModel};