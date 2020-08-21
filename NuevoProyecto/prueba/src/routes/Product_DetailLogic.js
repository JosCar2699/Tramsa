const router = require('express').Router();
const Warehouse = require('../models/Product_Detail');


router.get('/', async(req, res) => {
    const Product_Details = await Product_Detail.find();
    console.log(Product_Details);
    res.render('Producto Detalle', { Product_Details: Product_Details });
});

router.post('/add-product', async(req, res) => {
    const newProduct_Detail = new Product_Detail(req.body);
    await newProduct_Detail.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;