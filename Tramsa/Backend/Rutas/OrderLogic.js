const { Router } = require('express');
const router = Router();

const Order = require('../Modelos/Order');

router.get('/', async(req, res) => {
    const Orders = await Order.find();
});

router.post('/', async(req, res) => {
    const { Order, Orders_Date, Supplier, Invoice } = req.body;
    const newOrder = new Order({ Order, Orders_Date, Supplier, Invoice })
    await newOrder.save();
});

router.delete('/:id', async(req, res) => {
    const Order = await Order.findByIdAndDelete(req.params.id);
})

module.exports = router;