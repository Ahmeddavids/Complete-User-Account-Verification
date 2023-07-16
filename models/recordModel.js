const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    math: {
        type: Number,
        required: ["Score is required", true]
    },
    english: {
        type: Number,
        required: ["Score is required", true]
    },
}, { timestamps: true } );


module.exports = mongoose.model('Record', recordSchema)