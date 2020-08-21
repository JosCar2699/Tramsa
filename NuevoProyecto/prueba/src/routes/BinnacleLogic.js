const { Router } = require('express');
const router = Router();

const Binnacle = require('../Modelos/Binnacle');

router.get('/', async(req, res) => {
    const Binnacles = await Binnacle.find();
});

router.post('/', async(req, res) => {
    const { User, Datetime, Register_Code, Description } = req.body;
    const newBinnacle = new Binnacle({ User, Datetime, Register_Code, Description })
    await newBinnacle.save();
});

router.delete('/:id', async(req, res) => {
    const Binnacle = await Binnacle.findByIdAndDelete(req.params.id);
})

module.exports = router;