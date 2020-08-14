const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    Product_Code: { type: String, required: true },
    Description: { type: String, required: true },
    Reorder_Point: { type: String, required: true },
    Measure_Unit: { type: String, required: true }
})

module.exports = model('Product', ProductSchema);