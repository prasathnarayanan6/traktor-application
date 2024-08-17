const client = require('../utils/conn');
const ProfileModel = async(mail) => {
    return new Promise((reject, resolve)=>{
        client.query("SELECT personal_email, user_contact, user_department, user_id, user_mail, user_role, user_name FROM user_data WHERE user_mail=$1",[mail], (err, result)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                if(result.rows.length > 0)
                {
                    resolve({result});
                }
                else
                {
                     
                }
            }
        })
    })
}
module.exports = ProfileModel;