const mongoose = require('mongoose')

const csvSchema = new mongoose.Schema({
    file: {
        type: String,
        required: true,
        index: true
    },
    header:{
        type:[Object]
    },
    data:{
        type:[Object]
    }
},{
    timestamps: true
})

const Csv = mongoose.model('CsvFiles',csvSchema)

module.exports = Csv