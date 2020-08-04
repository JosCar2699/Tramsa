const { Schema, model } = require('mongoose');

const ClientSchema = new Schema({
    CUIT: { type: String, required: true },
    Entry_Date: { type: String, required: true },
    First_Lastname: { type: String, required: true },
    Second_Lastname: { type: String, required: true },
    Name: { type: String, required: true },
    State: { type: String, required: true },
    Telephone: { type: String, required: true },
    Email: { type: String, required: true },
    Address: { type: String, required: true }
})

module.exports = model('Client', ClientSchema);