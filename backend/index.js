const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.model.js')

//MDW
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*
ROTAS
*/
app.use("/api/usuarios", rotaUsuario)


app.listen(3000, () => {
    console.log('Servindo na porta 3000');
});

app.get('/', (req, res) => {
    res.send("API funcionando")
})

/*
ler todos os usuários
*/
app.get('/api/usuarios', async (req, res) =>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
});

/*
Ler usuário específico por id
*/
app.get('/api/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
});

/* 
Criar usuário
*/
app.post('/api/usuarios', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

/* 
Atualizar usuário
*/
app.put('/api/usuarios/:id', async (req, res) => {
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
});

/*
Deletar usuário
*/
app.delete('/api/usuarios/:id', async (req, res) => {
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
});


mongoose.connect("mongodb+srv://admin:FjczmzCQB63R75r2@aguahomedb.kdhrj86.mongodb.net/Node-API?retryWrites=true&w=majority&appName=aguaHomeDb")
.then(() => {
    console.log("Conectado com a base de dados do agua home");
})
.catch(() => {
    console.log("Error:" + mongoose.MongooseError);
})