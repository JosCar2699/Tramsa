const { Schema, model } = require('mongoose');

const Product_detailSchema = new Schema({
    Product_Code: { type: String, required: true },
    Raw_Material_Code: { type: String, required: true }

})

module.exports = model('Product_Detail', Product_detailSchema);