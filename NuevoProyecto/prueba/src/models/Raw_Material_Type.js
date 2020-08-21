const mongoose = require('mongoose');
const { Schema } = mongoose;


const Raw_Material_TypeSchema = new Schema({
    Raw_Material_Type_Code: { type: String, required: true },
    Description: { type: String, required: true }
})

module.exports = mongoose.model('Raw_Material_Type', Raw_Material_TypeSchema);