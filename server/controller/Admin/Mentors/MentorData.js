const { FetchMentorDataModel, MentorCountData } = require("../../../model/AddMentorModel");
const FetchMentorData = async(req, res) => {
    try
    {
        const result = await FetchMentorDataModel();
        res.status(200).json(result);
    }
    catch(error)
    {
        res.send(error)
    }
}
const MentorCount = async(req, res) => {
    try 
    {
        const result = await MentorCountData();
        res.status(200).json(result);
    }
    catch(err)
    {
        res.send(err);
    }
}
module.exports = {
    FetchMentorData,
    MentorCount
};