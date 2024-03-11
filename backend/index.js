const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const Report = require('./models/report.model.js');
const userRoute = require('./rotas/user.routes.js');
const reportRoute = require('./rotas/report.route.js');


//-------------------------------------//
//              MDW                    //
//-------------------------------------//
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//------------------------------------//
//             ROTAS                  //
//------------------------------------//
app.use("/api/usuarios", userRoute);
app.use("/api/reports", reportRoute)


//------------------------------------//
//          Teste servidor            //
//------------------------------------//
app.get('/', (req, res) => {
    res.send("Servidor em execução")
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