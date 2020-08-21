const router = require('express').Router();
const Warehouse = require('../models/Product');


router.get('/', async(req, res) => {
    const Products = await Product.find();
    console.log(Products);
    res.render('Producto', { Products: Products });
});

router.post('/add-product', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;