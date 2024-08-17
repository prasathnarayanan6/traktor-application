const client = require('../../utils/conn');
const FetchMentorData = () => {
    return new Promise((resolve, reject)=>{
            client.query(`SELECT * FROM mentors`, (err, result)=>{
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
module.exports = {FetchMentorData};