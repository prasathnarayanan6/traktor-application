const Report = (req, res) => {
    try
    {
        const nirmaan_checkbox = req.query.nirmaan_checkbox || "sjd";
        const ugfir_checkbox = req.query.ugfir || "";
        const kgmg = req.query.kgmg || "";
        const DE = req.query.de || "";
        res.status(201).json(nirmaan_checkbox, ugfir_checkbox, kgmg, DE);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }
}
module.exports = Report