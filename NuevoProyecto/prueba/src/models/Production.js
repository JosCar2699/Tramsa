const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductioonSchema = new Schema({
    Production_Number: { type: String, required: true },
    Production_Date: { type: String, required: true },
    Product_Date: { type: String, required: true },
    Product_Code: { type: String, required: true },
    Warehouse_Code: { type: String, required: true },
    Quantity: { type: String, required: true },
    Estimated_Time: { type: String, required: true },
})

module.exports = mongoose.model('Production', ProductionSchema);