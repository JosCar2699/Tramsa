const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    Product_Code: { type: String, required: true },
    Description: { type: String, required: true },
    Reorder_Point: { type: String, required: true },
    Measure_Unit: { type: String, required: true }
})

module.exports = moogose.model('Product', ProductSchema);