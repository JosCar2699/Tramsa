const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    Order: { type: String, required: true },
    Orders_Date: { type: String, required: true },
    Supplier: { type: String, required: true },
    Invoice: { type: String, required: true },
})

module.exports = mongoose.model('Order', OrderSchema);
