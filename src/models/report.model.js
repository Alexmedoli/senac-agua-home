const mongoose = require("mongoose");


const reportSchema = mongoose.Schema(
    {
        idUsuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        formaRecebimento: {
            type: String,
            ref: 'User.formaRecebimento',
            required: false
        },
        
        endereçoReport: {
            type: {
                cep:{
                    type: Number,
                    required: true,
                },
                rua:{
                    type: String,
                    required: false,
                },
                numeroResidencial: {
                    type: Number,
                    required: false,
                },
            },
            required: true,
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

