const {SendMessageModel, ViewMessageModel} = require("../../../model/Messages")
const AddMessage = async(req, res) => {
    try 
    {
        const {message_id, sender_id, message, receiver_id} = req.body;
        const result = await SendMessageModel(message_id, sender_id, message, receiver_id);
        res.send(result);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
const ViewMessage = async(req, res) => {
      try
      {
        const {sender_id} = req.body;
        const result = await ViewMessageModel(sender_id);
        res.send(result);
      }
      catch(err)
      {
        res.send(err);
      }
}
module.exports = {AddMessage, ViewMessage}