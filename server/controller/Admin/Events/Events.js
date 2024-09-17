const {CreateEventsModel, FetchEventsModel, RequestSpeakerModel} = require('../../../model/Admin/EventsModel');
const CreateEvents = async(req, res) => {
    const {event_type, event_title,  event_privacy, event_description, select_speaker, event_date, event_time, created_by} = req.body;
    if(!event_type || !event_title || !event_privacy || !event_description || !select_speaker || !event_date || !event_time || !created_by)
    {
        res.status(400).json({status: 'Check all fields'})
    }
    else 
    {
        try
        {
            const result = await CreateEventsModel(event_type, event_title, event_privacy, event_description, event_date, event_time, created_by, select_speaker);
            res.status(200).json(result);
        }
        catch(err) 
        {
            res.send(err);
        }
    }
}

const FetchEvents = async(req, res) => {
    try 
    {
        const result = await FetchEventsModel();  
        res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

const RequestSpeaker = async(req, res) => {
    const {select_speaker, event_description, created_by} = req.body;
    if(!select_speaker || !event_description || !created_by)
    {
        res.status(401).send("Not a Proper ")
    }
    else
    {
        try
        {
            const result = await RequestSpeakerModel(select_speaker, event_description, created_by);
            res.status(200).json(result);
        }
        catch(err)
        {
            console.log(err);
        }
    }
}

// const AddPastEvents = async(req, res) => {
//     const {event_type, event_title, event_description, select_speaker, event_date, event_time, created_by} = req.body;
//     if(!event_type || !event_title || !event_date || !event_time || !event_description || !select_speaker || !created_by)
//     {
//         res.status(401).send("Not a Proper");
//     }
//     else
//     {
//         try
//         {
//             const 
//         }
//         catch(err)
//     }
// }
module.exports = {CreateEvents, FetchEvents, RequestSpeaker};