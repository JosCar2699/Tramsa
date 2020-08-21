const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
    Event_Code: { type: String, required: true },
    Description: { type: String, required: true }
})

module.exports = mongoose.model('Event', EventSchema);