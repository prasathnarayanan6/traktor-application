const client = require('../utils/conn');
const ResumeUploadModel = (name, email, college, department, url, year) => {
    return new Promise((resolve, reject)=>{
        const query = 'INSERT INTO resume_data (resume_name, resume_email, college_data, college_department, resume_url, resume_year) VALUES ($1, $2, $3, $4, $5, $6)';
        client.query(query, [name, email, college, department, url, year], 
        (err, result) => {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve({note : "uploaded successfully" , result: result});
            }
        }
        )
    })
}
module.exports = ResumeUploadModel;