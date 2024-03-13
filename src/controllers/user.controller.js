const User = require('../models/user.model');
const bcrypt = require('bcrypt');

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
        const hashSenha = await bcrypt.hash(req.body.senha, 10)
        req.body.senha = hashSenha;
        const user = await User.create(req.body);
        res.redirect('../../public/login.html')

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
Logar usuário
*/
const login = async (req, res) => {
    try {
        const user = await User.findOne({nome: req.body.nome});
        if (!user) {
            return res.status(400).send('Usuário não encontrado');
        }
        
        if (await bcrypt.compare(req.body.senha, user.senha)){
            res.redirect('../../public/usuario-notificacao.html')

        } else{
            res.send('Usuário ou senha incorretos, tente novamente!')
        }
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



/*
Recuperar senha
*/
const putRecsenha = async (req, res) => {

    try {

        
        const user = await User.findByNum(id, req.body /*procura por telefone invés disso {telefoneNumero: req.body.numeroTelefone}*/);
        //vamo começar testando pra ver se as senhas envidas são idênticas,
        // mais ou menos 
        //if (newSenha1 != newSenha2){ fala pro usuário que deu ruim}
   
        // se você não tá enviando o :id na rota, como você vai pegar ele aqui?
        //const { id } = req.params;
        // se o que está sendo enviado é o número, então você tem que pesquisar a database com ....

         if (!user) {
            return response.status(404).json({message:"Usuário não encontrado"});
        }
        // se passar desse if, é pq o usuário existe
        // se ele existe, tu transforma o req.body.newSenha1 como o novo valor de user.senha

        const usuarioAtualizado = await User.findById(id);
        res.status(200).json(usuarioAtualizado);


    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


module.exports = {
    getUsuarios, 
    getUsuario, 
    login,
    postUsuario, 
    putUsuario, 
    deleteUsuario,
    putRecsenha
};
