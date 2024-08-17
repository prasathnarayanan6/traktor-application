const ProfileModel = require('../../../model/ProfileModel');
const Profile = async(req, res) => {
        try
        {
            const{mail} = req.params;
            //res.send(mail);
            const result = await ProfileModel(mail);
            res.send(result);
        } 
        catch(err)
        {
            res.send(err);
        }   
}
module.exports = Profile;