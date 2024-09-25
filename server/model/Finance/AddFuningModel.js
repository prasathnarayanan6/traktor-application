const client = require('../../utils/conn');
const DataViewModel = async(startup_name) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM update_funding WHERE startup_name=$1 AND funding_type=$2`, [startup_name, 'Funding Distributed'], (err, result) => {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(result)
            }
        })
    })
}
const AddFundingModel = async (startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description) => {    
    return new Promise((resolve, reject) => {
        client.query(
            "INSERT INTO update_funding(startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8)", 
            [startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description], 
            (err, result) => {
                if (err) {
                    reject({ err });
                } else {
                    resolve(result);
                }
            }
        );
    });
};

const FundingNotificationModel = async() => {
    return new Promise((resolve, reject) => {
        client.query("SELECT * FROM update_funding ORDER BY funding_date DESC ", (err, result) => {
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
module.exports = { AddFundingModel, DataViewModel, FundingNotificationModel};