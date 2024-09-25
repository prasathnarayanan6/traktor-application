const { AddFundingModel, DataViewModel, FundingNotificationModel } = require('../../model/Finance/AddFuningModel');
const AddFunding = async (req, res) => {
    const { startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description } = req.body;
    if (!startup_name || !funding_type || !amount || !purpose || !funding_date || !reference_number) {
        return res.status(400).json({ message: "Please fill all necessary fields" });
    }
    else
    {
            try 
            {
                const result1 = await DataViewModel(startup_name);
                //console.log(result1);
                if(result1.rowCount > 0)
                {
                    if(funding_type=="Funding Utilized")
                    {
                        const result = await AddFundingModel(startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description);
                        res.status(200).send(result);
                    }
                }
                else if(funding_type=="Funding Distributed")
                {
                        const result = await AddFundingModel(startup_name, funding_type, amount, purpose, funding_date, reference_number, document, description);
                        res.status(200).send(result);   
                }
                else
                {
                    res.status(401).send("Team has'nt got funds");
                }
            } 
            catch (err) 
            {
                return res.status(500).json({ error: err });
            }
    }
};
const updateFundingNotif = async(req, res) => {
    try
    {
        const result = await FundingNotificationModel()
        res.status(200).json(result);
    }
    catch(err)
    {   
        res.status(500).json(err)
    }       
}
module.exports = {AddFunding, updateFundingNotif};