const {CreateEventsModel, FetchEventsModel} = require('../../../model/Admin/EventsModel');
const CreateEvents = async(req, res) => {
    const {event_type, event_title,  event_privacy, event_description, event_date, event_time, created_by} = req.body;
    if(!event_type || !event_title || !event_privacy || !event_description || !event_date || !event_time || !created_by)
    {
        res.status(400).json({status: 'Check all fields'})
    }
    else 
    {
        try
        {
            const result = await CreateEventsModel(event_type, event_title, event_privacy, event_description, event_date, event_time, created_by);
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
module.exports = {CreateEvents, FetchEvents};