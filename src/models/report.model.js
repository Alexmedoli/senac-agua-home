const mongoose = require("mongoose");
const User = require('../models/user.model');

const reportSchema = mongoose.Schema(
    {
        idUsuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        },

        formaRecebimento: {
            type: String,
            required: false
        },
        
        endereçoReport: {
            type: {
                cep:{
                    type: String,
                    required: false,
                },
                rua:{
                    type: String,
                    required: false,
                },
                numeroResidencial: {
                    type: String,
                    required: false,
                },
            },
            required: false,
        },
            
        imagemReport:{
            type: String, 
            required: false,
        },

    },    
    {
        timestamps: true,
    }
);

const Report = mongoose.model("Report", reportSchema)

module.exports = Report;

