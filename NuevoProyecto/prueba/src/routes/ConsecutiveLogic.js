const router = require('express').Router();
const Warehouse = require('../models/Consecutive');


router.get('/', async(req, res) => {
    const Consecutives = await Consecutive.find();
    console.log(Consecutives);
    res.render('Consecutivos', { Consecutives: Consecutives });
});

router.post('/add-product', async(req, res) => {
    const newConsecutive = new Consecutive(req.body);
    await newConsecutive.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;