const router = require('express').Router();
const Warehouse = require('../models/Role');


router.get('/', async(req, res) => {
    const Roles = await Role.find();
    console.log(Roles);
    res.render('Rol', { Roles: Roles });
});

router.post('/add-product', async(req, res) => {
    const newRole = new Role(req.body);
    await newRole.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;