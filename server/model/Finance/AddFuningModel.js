const client = require('../../utils/conn');

const AddFundingModel = async (startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description) => {
    //const { startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description } = funding_form;
    
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

module.exports = { AddFundingModel };