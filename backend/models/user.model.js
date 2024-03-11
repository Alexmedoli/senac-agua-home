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

        endereço: {
            type: {
                cep: {
                    type: String,
                    required: true,
                    default: 0,
                },
                rua: {
                    type: String,
                    required: true,
                },
                numeroResidencial: {
                    type: Number,
                    required: false,
                    default: 0,
                },
            },
            required: true,
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