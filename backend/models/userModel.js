const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
        },

        numeroTelefone: {
            type: Number,
            required: true,
        },

        endereço: {
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
            
        formaRecebimento:{
            type: String, 
            enum: ["sms", "whatsapp", "agua-home"],
            required: true,
        }
    }    
);

module.exports = mongoose.model("", userSchema)