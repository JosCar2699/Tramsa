const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    Event_Code: { type: String, required: true },
    Description: { type: String, required: true }
})

module.exports = model('Event', EventSchema);