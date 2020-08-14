const { Router } = require('express');
const router = Router();

const Truck = require('../Modelos/Truck');

router.get('/', async(req, res) => {
    const Trucks = await Truck.find();
});

router.post('/', async(req, res) => {
    const { Truck_Code, Description, Short_Name, Brand, Year, Plate } = req.body;
    const newTruck = new Truck({ Truck_Code, Description, Short_Name, Brand, Year, Plate })
    await newTruck.save();
});

router.delete('/:id', async(req, res) => {
    const Truck = await Truck.findByIdAndDelete(req.params.id);
})

module.exports = router;