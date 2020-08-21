const router = require('express').Router();
const Warehouse = require('../models/Raw_Material_Type');


router.get('/', async(req, res) => {
    const Raw_Material_Types = await Raw_Material_Type.find();
    console.log(Raw_Material_Types);
    res.render('Tipo Materia Prima', { Raw_Material_Types: Raw_Material_Types });
});

router.post('/add-product', async(req, res) => {
    const newRaw_Material_Type = new Raw_Material_Type(req.body);
    await newRaw_Material_Type.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;