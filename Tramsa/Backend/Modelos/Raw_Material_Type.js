const { Schema, model } = require('mongoose');

const Raw_Material_TypeSchema = new Schema({
    Raw_Material_Type_Code: { type: String, required: true },
    Description: { type: String, required: true }
})

module.exports = model('Raw_Material_Type', Raw_Material_TypeSchema);