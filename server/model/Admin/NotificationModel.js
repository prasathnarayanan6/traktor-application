const client = require("../../utils/conn")

const FetchAwsCreditData = () => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM aws_applied`, (err, result)=> {
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
module.exports = {FetchAwsCreditData};