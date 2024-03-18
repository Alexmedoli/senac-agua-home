const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: false,
        },

        email: {
            type: String,
            required: false,
            lowercase: true,
        },

        numeroTelefone: {
            type: Number,
            required: false,
            default: 0,
        },

        senha:{
            type: String,
            required: false,
        },

        endereço: {
            type: {
                cep: {
                    type: String,
                    required: false,
                    default: 0,
                },
                rua: {
                    type: String,
                    required: false,
                },
                numeroResidencial: {
                    type: Number,
                    required: false,
                    default: 0,
                },
            },
            required: false,
        },

        formaRecebimento: {
            type: String,
            enum: ["mensagem", "whatsapp", "telegram"],
            required: false,
        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;