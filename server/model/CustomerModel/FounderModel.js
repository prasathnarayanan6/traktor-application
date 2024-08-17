const client = require('../../utils/conn');

const Founder = async (founder_name,
    founder_email,
    founder_number,
    founder_gender,
    founder_student_id,
    founder_linkedin,
    founder_role, 
    session_mail) => {
    return new Promise((resolve, reject) => {
        client.query(`UPDATE founder_details SET name = $1, email= $2, number = $3, gender = $4, studentid = $5, linkedin = $6, role = $7 WHERE email = $8`, 
            [founder_name,
            founder_email,
            founder_number,
            founder_gender,
            founder_student_id,
            founder_linkedin,
            founder_role, 
            session_mail] , 
            (error, result)=>{
            if(error)
            {
                reject(error);
            }
            else
            {
                resolve(result);
            }
        })
    })
};

module.exports = Founder;