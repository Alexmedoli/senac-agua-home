const User = require('../models/user.model');

/*
ler todos os usuários
*/
const getUsuarios = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
           
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

/*
ler usuários por id
*/
const getUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}


/*
Criar Usuário
*/
const postUsuario = async (req,res) =>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

/*
Atualizar usuário
*/
const putUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return response.status(404).json({message:"Usuário não encontrado"});
        }

        const usuarioAtualizado = await User.findById(id);
        res.status(200).json(usuarioAtualizado);


    } catch (error) {
        res.status(500).json({message:error.message});
    
    }
}

/*
Deletar usuário por id
*/
const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id, req.body);
        
        if (!user){
            return express.response.status(404).json({message:"Usuário não encontrado"});
        }

        res.status(200).json({message: "O usuário foi deletado com sucesso"});

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    getUsuarios, 
    getUsuario, 
    postUsuario, 
    putUsuario, 
    deleteUsuario
};