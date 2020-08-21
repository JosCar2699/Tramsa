const mongoose = require('mongoose');
const { Schema } = mongoose;

const General_ParameterSchema = new Schema({
    ExchangeRate_Sale: { type: String, required: true },
    ExchangeRate_Purchase: { type: String, required: true }
})

module.exports = mongoose.model('General_Parameter', General_ParameterSchema);