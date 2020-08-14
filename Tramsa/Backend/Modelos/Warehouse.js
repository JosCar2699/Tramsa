const { Schema, model } = require('mongoose');

const WarehouseSchema = new Schema({
    Warehouse_Code: { type: String, required: true },
    Name: { type: String, required: true },
    Short_Name: { type: String, required: true },
    Nickname: { type: String, required: true },
    Warehouse_Address: { type: String, required: true },
    Measure_Unit: { type: String, required: true },
    Warehouse_Type: { type: String, required: true },
    Warehouse_Slot: { type: String, required: true }
})

module.exports = model('Warehouse', WarehouseSchema);


Warehouse_Code, Name, Short_Name, Nickname, Warehouse_Address, Measure_Unit, Warehouse_Type, Warehouse_Slot