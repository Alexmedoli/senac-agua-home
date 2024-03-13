const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
    {
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

const Report = mongoose.model("report", reportSchema)

module.exports = Report;

