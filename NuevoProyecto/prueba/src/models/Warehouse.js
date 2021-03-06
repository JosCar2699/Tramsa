const mongoose = require('mongoose');
const { Schema } = mongoose;

const WarehouseSchema = new Schema({
    Warehouse_Code: { type: String },
    Name: { type: String },
    Short_Name: { type: String },
    Nickname: { type: String },
    Warehouse_Address: { type: String },
    Measure_Unit: { type: String },
    Warehouse_Type: { type: String },
    Warehouse_Slot: { type: String }
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);