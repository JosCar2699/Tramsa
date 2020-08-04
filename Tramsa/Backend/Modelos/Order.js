const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    Order: { type: String, required: true },
    Orders_Date: { type: String, required: true },
    Supplier: { type: String, required: true },
    Invoice: { type: String, required: true },
})

module.exports = model('Order', OrderSchema);