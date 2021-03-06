const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order_DetailSchema = new Schema({
    Orders: { type: String, required: true },
    Raw_Material_Code: { type: String, required: true },
    Quantity: { type: String, required: true },
    State: { type: String, required: true },
    Value: { type: String, required: true },
    Truck: { type: String, required: true },
})


module.exports = mongoose.model('Order_Detail', Order_DetailSchema);