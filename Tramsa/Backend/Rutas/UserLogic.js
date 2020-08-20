const { Router } = require('express');
const router = Router();

const User = require('../Modelos/User');

router.get('/', async(req, res) => {
    const Warehouses = await Warehouse.find().sort('-_id');;
    res.json(Warehouses);
});

router.post('/', async(req, res) => {
    const { ID, Username, Password, Name, Email, State } = req.body;
    const newUser = new User({ ID, Username, Password, Name, Email, State })
    await newUser.save();
});

router.delete('/:id', async(req, res) => {
    const User = await User.findByIdAndDelete(req.params.id);
})

module.exports = router;