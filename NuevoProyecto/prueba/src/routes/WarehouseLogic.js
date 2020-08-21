

const router = require('express').Router();
const Warehouse = require('../models/Warehouse');


router.get('/', async(req, res) => {
    const Warehouses = await Warehouse.find().sort('sorting');
    console.log(Warehouses);
    res.render('bodegas', { Warehouses: Warehouses});
});
  
router.post('/add-product', async(req, res) => {
     const newWarehouse = new Warehouse(req.body);
     await newWarehouse.save();

     
    res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const Warehouse = await Warehouse.findByIdAndDelete(req.params.id);
//     res.json({ 'Mensaje': 'Bodega Eliminada' });
// })



module.exports = router;





