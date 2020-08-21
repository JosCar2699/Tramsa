const router = require('express').Router();
const Warehouse = require('../models/Binnacle');


router.get('/', async(req, res) => {
    const Binnacles = await Binnacle.find();
    console.log(Binnacles);
    res.render('Binarios', { Binnacles: Binnacles });
});

router.post('/add-product', async(req, res) => {
    const newBinnacle = new Binnacle(req.body);
    await newBinnacle.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;