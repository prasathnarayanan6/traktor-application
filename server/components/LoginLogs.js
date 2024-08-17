const client = require('../utils/conn');
const LoginLogs = (email, user_role, time, sessionId) => {
        return new Promise((resolve, reject)=> {
            client.query("SELECT * FROM user_data WHERE user_mail = $1", [email],
            (err, result)=>{
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        if(result.rows.length > 0)
                        {
                            console.log('hu');
                        }
                        else
                        {
                            console.log('bug')
                        }
                    }   
            }
        )
        })
}
module.exports = LoginLogs;