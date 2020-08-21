const router = require('express').Router();
const Warehouse = require('../models/Event');


router.get('/', async(req, res) => {
    const Events = await Event.find();
    console.log(Events);
    res.render('Eventos', { Events: Events });
});

router.post('/add-product', async(req, res) => {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;