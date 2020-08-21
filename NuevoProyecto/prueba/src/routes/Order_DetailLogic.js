const { Router } = require('express');
const router = Router();

const Order_Detail = require('../Modelos/Order_Detail');

router.get('/', async(req, res) => {
    const Order_Details = await Order_Detail.find();
});

router.post('/', async(req, res) => {
    const { Orders, Raw_Material_Code, Quantity, State, Value, Truck } = req.body;
    const newOrder_Detail = new Order_Detail({ Orders, Raw_Material_Code, Quantity, State, Value, Truck })
    await newOrder_Detail.save();
});

router.delete('/:id', async(req, res) => {
    const Order_Detail = await Order_Detail.findByIdAndDelete(req.params.id);
})

module.exports = router;