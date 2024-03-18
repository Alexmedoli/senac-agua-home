const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const userRoute = require('./src/rotas/user.routes.js');
const reportRoute = require('./src/rotas/report.route.js');
const path = require ('path');


//-------------------------------------//
//              MDW                    //
//-------------------------------------//
const app = express();
app.use(express.static(__dirname)),
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'SECRET_KEY', // SECRET KEY
    resave: false,
    saveUninitialized: true
}));

//------------------------------------//
//             ROTAS                  //
//------------------------------------//
app.use("/api/usuarios", userRoute);
app.use("/api/reports", reportRoute)


//------------------------------------//
//          Teste servidor            //
//------------------------------------//
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

//------------------------------------//
//       Teste base de dados          //
//------------------------------------//
mongoose.connect("mongodb+srv://admin:FjczmzCQB63R75r2@aguahomedb.kdhrj86.mongodb.net/Node-API?retryWrites=true&w=majority&appName=aguaHomeDb")
.then(() => {
    console.log("Conectado à base de dados do agua home");
    app.listen(3000, () => {
        console.log("Servidor em execução na porta 3000");
    })
})
.catch(() => {
    console.log("Error:" + mongoose.MongooseError);
})