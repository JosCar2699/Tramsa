const router = require('express').Router();
const Warehouse = require('../models/Production');


router.get('/', async(req, res) => {
    const Productions = await Production.find();
    console.log(Productions);
    res.render('Produccion', { Productions: Productions });
});

router.post('/add-product', async(req, res) => {
    const newProduction = new Production(req.body);
    await newProduction.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;