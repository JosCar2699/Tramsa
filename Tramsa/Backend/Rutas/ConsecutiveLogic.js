const { Router } = require('express');
const router = Router();

const Consecutive = require('../Modelos/Consecutive');

router.get('/', async(req, res) => {
    const Consecutives = await Consecutive.find();
});

router.post('/', async(req, res) => {
    const { Consecutive_Type, Description, Consecutive_Value } = req.body;
    const newConsecutive = new Consecutive({ Consecutive_Type, Description, Consecutive_Value })
    await newConsecutive.save();
});

router.delete('/:id', async(req, res) => {
    const Consecutive = await Consecutive.findByIdAndDelete(req.params.id);
})

module.exports = router;