const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product_detailSchema = new Schema({
    Product_Code: { type: String, required: true },
    Raw_Material_Code: { type: String, required: true }

})

module.exports = mongoose.model('Product_Detail', Product_detailSchema);