const { FetchMentorDataModel, MentorCountData, MentorDeleteData } = require("../../../model/AddMentorModel");
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
const DeleteMentorData = async(req, res) => {
    const email_address = req.params.id;
    if(email_address)
    {
        try 
        {
            const result = await MentorDeleteData(email_address);
            res.status(200).json(result);
        }
        catch(err)
        {
            res.send(err);
        }
    }
    else
    {
        res.send("Params missing");
    }
}
module.exports = {
    FetchMentorData,
    MentorCount,
    DeleteMentorData
};