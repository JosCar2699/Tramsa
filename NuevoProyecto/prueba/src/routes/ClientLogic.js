const router = require('express').Router();
const Warehouse = require('../models/Client');


router.get('/', async(req, res) => {
    const Clients = await Client.find();
    console.log(Clients);
    res.render('Clientes', { Clients: Clients });
});

router.post('/add-product', async(req, res) => {
    const newClient = new Client(req.body);
    await newClient.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;