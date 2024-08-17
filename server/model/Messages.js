const client = require('../utils/conn');
const SendMessageModel = async(message_id, sender_id, message, receiver_id) => {
    return new Promise((reject, resolve) => {
        client.query("INSERT INTO messages_data(message_id, sender_id, message, receiver_id) VALUES($1, $2, $3, $4)",[message_id, sender_id, message, receiver_id], (err, result)=> {
            if(err)
            {
                reject(err);
            }
            else
            {
                 if(result)
                {
                    resolve({status: "Data inserted successfuly"});
                }
                else
                {
                    resolve({status: "Not inserted"});
                }
            }
        })
    })
}
const ViewMessageModel = async(sender_id) => {
    return new Promise((reject, resolve) => {
        client.query("SELECT * FROM messages_data WHERE sender_id=$1", [sender_id], (err, result)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                if(result.rows.length>0)
                {
                    resolve({result})
                }   
                else
                {
                    resolve({status: "Not fetched"})
                }  
            }
        })
    })
}
module.exports = {SendMessageModel, ViewMessageModel}  