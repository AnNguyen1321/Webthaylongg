const ContributionModel = require('../models/Contribution');

exports.createContribution = async (req, res) => {
    try {
        var ContributionReg = req.body;
        const newContribution = new Contribution({
            account_id : ContributionReg.account_id,
            faculty_id : ContributionReg.faculty_id ,
            submission_date: ContributionReg.submission_date,
            upload_date: new Date()
        });
        await ContributionModel.create(newContribution);
        console.log("")
    } catch (error) {
        res.redirect('/' , err)
        console.log("Error when adding new Contribution : ",error)
    }
};

exports.getAllContributions = async (req, res) => {
    const contributions = await ContributionModel.find(); 
    return contributions;
};