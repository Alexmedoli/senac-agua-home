const Report = require('../models/report.model');
const User = require('../models/user.model');

// Ler todos os reports

const getReports = async (req, res) => {
    async (req,res) =>{
        try {
            const report = await Report.find({});
            res.status(200).json(report);
           
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
};

// Ler um report por id
const getReport = async (req,res) => {
    try {
        const { id } = req.params;
        const report = await Report.findById(id);
        res.status(200).json(report)
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}


/*
Criar report
*/
const postReport = async (req,res) =>{
    const report = await Report.create(req.body);
    
    try {

        if (!req.session.user) {
            return res.status(401).json({ message: 'Usuário não autenticado' });
        }

        const user = await User.findById(req.session.user._id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const report = await Report.create({...req.body, user: user._id })
        

        res.redirect('../../public/dashboard.html?success=true');


    } catch (error) {
        console.error('Erro ao enviar report: ', error.message);
        res.status(500).json({message: error.message})
        }
}


/*
Atualizar report
*/
const putReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findByIdAndUpdate(id, req.body);
        if (!report) {
            return response.status(404).json({message:"Report não encontrado"});
        }

        const reportAtualizado = await Report.findById(id);
        res.status(200).json(reportAtualizado);


    } catch (error) {
        res.status(500).json({message:error.message});
    
    }
}

// Deletar report por id
const deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        const report = await Report.findByIdAndDelete(id, req.body);
        
        if (!report){
            return express.response.status(404).json({message:"Report não encontrado"});
        }

        res.status(200).json({message: "O report foi deletado com sucesso"});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


module.exports = {
    getReports,
    getReport,
    postReport,
    putReport,
    deleteReport
};