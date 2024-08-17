const {AddSettings} = require("../../../model/SettingsModel");
const Settings = async(req, res) => {
    try
    {
        const result = await AddSettings();
        res.status(200).json({result});
    }
    catch(err)
    {
       res.status(500).json({ error: "An error occurred while adding settings." });
    }
}
module.exports = Settings;