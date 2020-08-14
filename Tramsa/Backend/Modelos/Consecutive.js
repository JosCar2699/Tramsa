const { Schema, model } = require('mongoose');

const ConsecutiveSchema = new Schema({
    Consecutive_Type: { type: String, required: true },
    Description: { type: String, required: true },
    Consecutive_Value: { type: String, required: true }
})

module.exports = model('Consecutive', ConsecutiveSchema);