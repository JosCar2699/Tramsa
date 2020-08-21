const mongoose = require('mongoose');
const { Schema } = mongoose;

const SupplierSchema = new Schema({
    Supplier_Code: { type: String, required: true },
    CUIT: { type: String, required: true },
    Name: { type: String, required: true },
    Telephone: { type: String, required: true },
    Email: { type: String, required: true },
    Contact: { type: String, required: true },
    Telephone_Contact: { type: String, required: true },
    Address: { type: String, required: true }
})

module.exports = mongoose.model('Supplier', SupplierSchema);