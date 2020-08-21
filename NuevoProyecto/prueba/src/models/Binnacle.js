const mongoose = require('mongoose');
const { Schema } = mongoose;

const BinnacleSchema = new Schema({
    User: { type: String, required: true },
    Datetime: { type: String, required: true },
    Register_Code: { type: String, required: true },
    Description: { type: String, required: true }
})

module.exports = mongoose.model('Binaccle', BinnacleSchema);