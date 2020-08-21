const router = require('express').Router();
const Warehouse = require('../models/Order');


router.get('/', async(req, res) => {
    const Orders = await Order.find();
    console.log(Orders);
    res.render('Orden', { Orders: Orders });
});

router.post('/add-product', async(req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;