const client = require('../utils/conn');
const AddStartupModel = async(basic, official, founder, description, official_email_address) => {
    return new Promise((resolve, reject)=> {
        client.query("INSERT INTO test_startup(basic, official, founder, description, official_email_address, startup_status) VALUES($1, $2, $3, $4, $5, $6)", [basic, official, founder, description, official_email_address, 'Active'], 
          (err, result) => {
            if(err)
            {
                reject({err});
            }
            else
            {
                resolve(result);
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
                client.query("SELECT COUNT(startup_status) AS active FROM test_startup WHERE startup_status='Active'", (err, result) => {
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
            const DroppedStartups = new Promise((resolveQuery3, rejectQuery3) => {
                client.query("SELECT COUNT(startup_status) AS Dropped_status FROM test_startup WHERE startup_status='Dropped'", (err, result) => {
                    if(err)
                    {
                        rejectQuery3(err);
                    }
                    else
                    {
                        resolveQuery3(result)
                    }
                })
            })

            const GraduatedStartups = new Promise((resolveQuery3, rejectQuery3) => {
                client.query("SELECT COUNT(startup_status) AS graduated_status FROM test_startup WHERE startup_status='Graduated'", (err, result) => {
                    if(err)
                    {
                        rejectQuery3(err);
                    }
                    else
                    {
                        resolveQuery3(result)
                    }
                })
            })
            Promise.all([TotalCountStartups, ActiveStartups, DroppedStartups, GraduatedStartups])
            .then(([TotalCountStartups, ActiveStartups, DroppedStartups, GraduatedStartups]) => {
                resolve({
                    TotalCountStartups,
                    ActiveStartups,
                    DroppedStartups,
                    GraduatedStartups
                });
            })
            .catch((err) => {
                reject(err)
            });
    })
}
module.exports = {AddStartupModel, StartupDataModel};