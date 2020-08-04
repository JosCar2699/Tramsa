const { Schema, model } = require('mongoose');

const General_ParameterSchema = new Schema({
    ExchangeRate_Sale: { type: String, required: true },
    ExchangeRate_Purchase: { type: String, required: true }
})

module.exports = model('General_Parameter', General_ParameterSchema);