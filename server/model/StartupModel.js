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

const StartupData = async() => {

    return new Promise((resolve, reject) => {

            const TotalCountStartups = new Promise((resolveQuery1, rejectQuery1) => {

            })

            const ActiveStartups = new Promise((resolveQuery2, rejectQuery2) => {

            })


            Promise.all([TotalCountStartups, ActiveStartups])
            .then([result1, result2])
    })

}
module.exports = {AddStartupModel};