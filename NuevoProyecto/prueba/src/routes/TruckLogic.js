const router = require('express').Router();
const Truck = require('../models/Truck');

router.get('/', async(req, res) => {
    const Trucks = await Truck.find();
    console.log(Trucks);
    res.render('camiones', { Trucks: Trucks});
});

router.post('/add-product', async(req, res) => {
    const newTruck = new Truck(req.body);
    

    await newTruck.save();

    
   res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const User = await User.findByIdAndDelete(req.params.id);
// })

module.exports = router;







