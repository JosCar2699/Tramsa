const router = require('express').Router();
const Warehouse = require('../models/Supplier');


router.get('/', async(req, res) => {
    const Suppliers = await Supplier.find();
    console.log(Suppliers);
    res.render('Suministro', { Suppliers: Suppliers });
});

router.post('/add-product', async(req, res) => {
    const newSupplier = new Supplier(req.body);
    await newSupplier.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;