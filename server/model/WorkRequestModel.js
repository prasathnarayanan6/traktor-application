const WorkRequestModel = (req, res) =>{
    const{user_mail, user_work_request_time, type_of_work, details_of_work} = req.body;
    console.log(req.body);
}
module.exports = WorkRequestModel;  