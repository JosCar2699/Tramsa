const { Schema, model } = require('mongoose');

const TruckSchema = new Schema({
    Truck_Code: { type: String, required: true },
    Description: { type: String, required: true },
    Short_Name: { type: String, required: true },
    Brand: { type: String, required: true },
    Year: { type: String, required: true },
    Plate: { type: String, required: true }
})

module.exports = model('Truck', TruckSchema);