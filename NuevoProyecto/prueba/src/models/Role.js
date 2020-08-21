const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoleSchema = new Schema({
    Role_Code: { type: String, required: true },
    Name: { type: String, required: true },
    State: { type: String, required: true },
    User_Assigned: { type: String, required: true }
})

module.exports = mongoose.model('Role', RoleSchema);