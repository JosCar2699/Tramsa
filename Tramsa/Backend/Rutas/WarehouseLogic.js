const { Router } = require('express');
const router = Router();

const Warehouse = require('../Modelos/Warehouse');

router.get('/', async(req, res) => {
    const Warehouses = await Warehouse.find();
});

router.post('/', async(req, res) => {
    const { Warehouse_Code, Name, Short_Name, Nickname, Warehouse_Address, Measure_Unit, Warehouse_Type, Warehouse_Slot } = req.body;
    const newWarehouse = new Warehouse({ Warehouse_Code, Name, Short_Name, Nickname, Warehouse_Address, Measure_Unit, Warehouse_Type, Warehouse_Slot })
    await newWarehouse.save();
});

router.delete('/:id', async(req, res) => {
    const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
})

module.exports = router;