const { Router } = require('express');
const router = Router();

const General_Parameter = require('../Modelos/General_Parameter');

router.get('/', async(req, res) => {
    const General_Parameters = await General_Parameter.find();
});

router.post('/', async(req, res) => {
    const { ExchangeRate_Sale, ExchangeRate_Purchase } = req.body;
    const newGeneral_Parameter = new General_Parameter({ ExchangeRate_Sale, ExchangeRate_Purchase })
    await newGeneral_Parameter.save();
});

router.delete('/:id', async(req, res) => {
    const General_Parameter = await General_Parameter.findByIdAndDelete(req.params.id);
})

module.exports = router;