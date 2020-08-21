const router = require('express').Router();
const Warehouse = require('../models/Order_Detail');


router.get('/', async(req, res) => {
    const Order_Details = await Order_Detail.find();
    console.log(Order_Details);
    res.render('Orden Detalle', { Order_Details: Order_Details });
});

router.post('/add-product', async(req, res) => {
    const newOrder_Detail = new Order_Detail(req.body);
    await newOrder_Detail.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;