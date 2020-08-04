const { Schema, model } = require('mongoose');

const BinnacleSchema = new Schema({
    User: { type: String, required: true },
    Datetime: { type: String, required: true },
    Register_Code: { type: String, required: true },
    Description: { type: String, required: true }
})

module.exports = model('Binnacle', BinnacleSchema);