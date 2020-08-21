const { Router } = require('express');
const router = Router();

const Production = require('../Modelos/Production');

router.get('/', async(req, res) => {
    const Productions = await Production.find();
});

router.post('/', async(req, res) => {
    const { Production_Number, Production_Date, Product_Date, Product_Code, Warehouse_Code, Quantity, Estimated_Time } = req.body;
    const newProduction = new Production({ Production_Number, Production_Date, Product_Date, Product_Code, Warehouse_Code, Quantity, Estimated_Time })
    await newProduction.save();
});

router.delete('/:id', async(req, res) => {
    const Production = await Production.findByIdAndDelete(req.params.id);
})

module.exports = router;