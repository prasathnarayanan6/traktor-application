const FounderModel = require('../../model/CustomerModel/FounderModel');
const Founder = async (req, res) => {
    const{session_mail} = req.query;
    const {founder_name,
        founder_email,
        founder_number,
        founder_gender,
        founder_student_id,
        founder_linkedin,
        founder_role} = req.body;
    if(session_mail)  
    {
        if(!founder_name || !founder_email || !founder_number || !founder_gender || !founder_student_id || !founder_linkedin || !founder_role)
        {
            res.status(400).json({data: 'Please fill required field'});
        }
        else
        {
            try
            {
                const result = await FounderModel(founder_name,
                    founder_email,
                    founder_number,
                    founder_gender,
                    founder_student_id,
                    founder_linkedin,
                    founder_role, session_mail);
                res.status(200).json({result});
                //res.status(200).json("De");
            }
            catch (err)
            {
                
                res.status(404).json({error: 'Internal Server Error', err: err});
            }
        }
    }
    else 
    {
		res.status(401).json({authentication: 'Please enter Mail ID properly!'})
	}
}

module.exports = Founder;