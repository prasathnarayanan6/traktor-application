const client = require("../utils/conn.js")
const DeleteResumeModel = (id) => {
    return new Promise((resolve, reject)=>{
        client.query('DELETE FROM resume_data WHERE resume_email=$1',[id],
            (err)=>{
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve({status: `Deleted resume ${id}`});
                }   
            }
        )
    })
}
module.exports = DeleteResumeModel;