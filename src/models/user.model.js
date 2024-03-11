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
            default: 0,
        },

        senha:{
            type: String,
            required: true,
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
            enum: ["sms", "whatsapp", "telegram"],
            required: true,
        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;