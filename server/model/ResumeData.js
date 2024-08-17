const client = require('../utils/conn');
// const Authenticate = require('../utils/Authenticate');
const ResumeData = (page_data, page_number) => {
    return new Promise((resolve, reject) => {
        client.query('SELECT * FROM resume_data ORDER BY resume_email LIMIT $1 OFFSET ($2 - 1) *$1', [page_data, page_number],
        (error, result)=> {
            if (error) 
            {
                reject(error);
            }
            else
            {
                if(result.rows.length > 0)
                {
                    resolve(result.rows);
                }
                else
                {
                    resolve({status: "User_not_found"});
                }
            }
        })
    })
}

module.exports = ResumeData;