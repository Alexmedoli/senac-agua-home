const User = require('../models/report.model');

const getReport = async (req, res) => {
    async (req,res) =>{
        try {
            const users = await Report.find({});
            res.status(200).json(users);
           
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
};
