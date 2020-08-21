const router = require('express').Router();
const Warehouse = require('../models/Raw_Material');


router.get('/', async(req, res) => {
    const Raw_Materials = await Raw_Material.find();
    console.log(Raw_Materials);
    res.render('Materia Prima', { Raw_Materials: Raw_Materials });
});

router.post('/add-product', async(req, res) => {
    const newRaw_Material = new Raw_Material(req.body);
    await newRaw_Material.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;