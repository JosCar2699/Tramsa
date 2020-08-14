const { Schema, model } = require('mongoose');

const Raw_MaterialSchema = new Schema({
    Raw_Material_Code: { type: String, required: true },
    Name: { type: String, required: true },
    Stock: { type: String, required: true },
    Measure_Unit: { type: String, required: true },
    Raw_Material_Type: { type: String, required: true }

})

module.exports = model('Raw_Material', Raw_MaterialSchema);