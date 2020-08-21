const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConsecutiveSchema = new Schema({
    Consecutive_Type: { type: String, required: true },
    Description: { type: String, required: true },
    Consecutive_Value: { type: String, required: true }
})


module.exports = mongoose.model('Consecutive', ConsecutiveSchema);