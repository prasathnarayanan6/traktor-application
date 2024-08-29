const { FetchMentorDataModel } = require("../../../model/AddMentorModel");
const FetchMentorData = async(req, res) => {
    try
    {
        const result = await FetchMentorDataModel();
        res.status(200).send(result);
    }
    catch(error)
    {
        res.send(error)
    }
}
module.exports = FetchMentorData;