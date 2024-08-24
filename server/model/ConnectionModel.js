const client = require("../utils/conn");
const AddConnectionModel = async(name, organisation, connect_for, contact_number, email_address,  designation) => {
    return new Promise((resolve, reject) => {
        client.query("INSERT INTO establish_connections(connection_name, organization, connect_for, contact_number, email_address, connection_desig) VALUES($1, $2, $3, $4, $5, $6)", [name, organisation, connect_for, contact_number, email_address, designation],
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

const EstablishConnectionModel = async(startup, connection, email_content, user_role) => {
    return new Promise((resolve, reject)=>{
        client.query("INSERT INTO tag_connection(startup_team_mail, connection_email, email_content, user_role) VALUES($1, $2, $3, $4)", [startup, connection, email_content, user_role], (err, result)=> {
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

const DeleteConnectionModel = async(email_address) => {
    return new Promise((resolve, reject) => {
        client.query("DELETE FROM establish_connections WHERE email_address=$1", [email_address], (err, result)=> {
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
module.exports = {AddConnectionModel, ViewConnectionModel, EstablishConnectionModel, DeleteConnectionModel};