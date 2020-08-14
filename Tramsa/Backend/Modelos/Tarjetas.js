const { Schema, model } = require('mongoose');

const CardsSchema = new Schema({
    Number: { type: String, required: true },
    Month_Exp: { type: String, required: true },
    Year_Exp: { type: String, required: true },
    CVV: { type: String, required: true },
    Amount: { type: String, required: true },
    Type: { type: String, required: true },
    IsCreditCard: { type: String, required: true },

})

module.exports = model('Cards', CardsSchema);