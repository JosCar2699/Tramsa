const router = require('express').Router();
const Warehouse = require('../models/Invoice');


router.get('/', async(req, res) => {
    const Invoices = await Invoice.find();
    console.log(Invoices);
    res.render('Factura', { Invoices: Invoices });
});

router.post('/add-product', async(req, res) => {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;