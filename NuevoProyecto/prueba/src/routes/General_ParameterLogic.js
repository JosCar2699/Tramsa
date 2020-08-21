const router = require('express').Router();
const Warehouse = require('../models/General_Parameter');


router.get('/', async(req, res) => {
    const General_Parameters = await General_Parameter.find();
    console.log(General_Parameters);
    res.render('Parametros Generales', { General_Parameters: General_Parameters });
});

router.post('/add-product', async(req, res) => {
    const newGeneral_Parameter = new General_Parameter(req.body);
    await newGeneral_Parameter.save();
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })

module.exports = router;