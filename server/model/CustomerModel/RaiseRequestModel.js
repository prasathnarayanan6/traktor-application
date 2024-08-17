const client = require('../../utils/conn');
const RaiseRequestModel = async(team_mail, request_type, description) => {
      return new Promise((resolve, reject )=> {
            client.query(`INSERT INTO raised_request(team_mail, request_type, description) VALUES($1, $2, $3)`, 
            [team_mail, request_type, description], 
            (err, result)=>{
                 if(err)
                 {
                    console.error('Error executing query:', err.message);
                    reject(err);
                 }  
                 else
                 {
                    resolve(result);
                 } 
            })
      })
}
module.exports = RaiseRequestModel