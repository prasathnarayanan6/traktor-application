const client = require('../utils/conn');
const AddStartupModel = async(basic, official, founder, description, official_email_address) => {
    return new Promise((resolve, reject)=> {
        client.query("INSERT INTO test_startup(basic, official, founder, description, official_email_address) VALUES($1, $2, $3, $4, $5)", [basic, official, founder, description, official_email_address], 
          (err, result) => {
            if(err)
            {
                reject({err});
            }
            else
            {
                if(result)
                {
                    resolve(result);
                }
                else
                {
                    return "none";
                }
            }
          }  
        )
    })
}

const StartupDataModel = async() => {
    return new Promise((resolve, reject) => {
            const TotalCountStartups = new Promise((resolveQuery1, rejectQuery1) => {
                    client.query("SELECT COUNT(basic::json->'startup_name') AS startup_total FROM test_startup", (err, result) => {
                        if(err)
                        {
                            rejectQuery1(err)
                        }
                        else
                        {
                            resolveQuery1(result)
                        }
                    })
            })
            const ActiveStartups = new Promise((resolveQuery2, rejectQuery2) => {
                client.query("SELECT COUNT(basic::json->>'startup_name') AS startup_total FROM test_startup", (err, result) => {
                    if(err)
                    {
                        rejectQuery2(err)
                    }
                    else
                    {
                        resolveQuery2(result)
                    }
                }) 
            })      
            Promise.all([TotalCountStartups, ActiveStartups])
            .then(([TotalCountStartups, ActiveStartups]) => {
                resolve({
                    TotalCountStartups,
                    ActiveStartups
                });
            })
            .catch((err) => {
                reject(err)
            });
    })
}
module.exports = {AddStartupModel, StartupDataModel};