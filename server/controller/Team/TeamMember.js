const {TeamMemberModel} = require("../../model/CustomerModel/TeamMemberModel");
const TeamMember = async(req, res) => {
    // const{session_mail} = req.query;
    const{team_name, team_email, team_number, team_designation}=req.body;
    try
    {
        const result = await TeamMemberModel(team_name, team_email, team_number, team_designation, team_email);
        res.status(200).json({result});
    }
    catch(err)
    {
        if(err.code == 23505)
        {
            res.status(409).json({request_data: "Email already exists"})
        }
        else
        {
            res.status(201).json({request_data: "Unknown Error"});
        }
        //res.send(err.code);
    } 
}
module.exports = TeamMember;