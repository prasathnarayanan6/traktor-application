const {Encryption, Decrypted} = require('../../../helpers/Encryption');
const {FetchAwsCreditData} = require('../../../model/Admin/NotificationModel');
const ViewNotification = async(req, res) => {
    try 
    {

            const result = await FetchAwsCreditData();
            if(result.rows[0].status == 'pending' || result.rows[0].status == "approved")
            {
                res.status(200).json({result});
            }
            else
            {
                res.status(401).send('There is no pending'); 
            }
    }
    catch(err)
    {
        res.status(400).send(err)
    }
}
module.exports = {ViewNotification};