const { Router } = require('express');
const router = Router();

const Raw_Material = require('../Modelos/Raw_Material');

router.get('/', async(req, res) => {
    const Raw_Materials = await Raw_Material.find();
});

router.post('/', async(req, res) => {
    const { Raw_Material_Code, Name, Stock, Measure_Unit, Raw_Material_Type } = req.body;
    const newRaw_Material = new Raw_Material({ Raw_Material_Code, Name, Stock, Measure_Unit, Raw_Material_Type })
    await newRaw_Material.save();
});

router.delete('/:id', async(req, res) => {
    const Raw_Material = await Raw_Material.findByIdAndDelete(req.params.id);
})

module.exports = router;