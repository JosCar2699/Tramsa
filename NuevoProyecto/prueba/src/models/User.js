const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    ID: { type: String, required: true },
    Username: { type: String, required: true },
    Password: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    State: { type: String, required: true }
})


module.exports = mongoose.model('User', UserSchema);