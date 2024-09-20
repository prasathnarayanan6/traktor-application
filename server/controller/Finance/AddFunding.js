const { AddFundingModel } = require('../../model/Finance/AddFundingModel.js');
const AddFunding = async (req, res) => {
    const { startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description } = req.body;
    if (!startup_name || !funding_type || !amount || !purpose || !funding_date || !reference_number) {
        return res.status(400).json({ message: "Please fill all necessary fields" });
    }
    else
    {
        try 
        {
            //const result = await AddFundingModel(startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description);
            return res.status(200).send(result);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
};

module.exports = { AddFunding };