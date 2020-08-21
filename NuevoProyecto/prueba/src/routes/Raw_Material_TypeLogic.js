const { Router } = require('express');
const router = Router();

const Raw_Material_Type = require('../Modelos/Raw_Material_Type');

router.get('/', async(req, res) => {
    const Raw_Material_Types = await Raw_Material_Type.find();
});

router.post('/', async(req, res) => {
    const { Raw_Material_Type_Code, Description } = req.body;
    const newRaw_Material_Type = new Raw_Material_Type({ Raw_Material_Type_Code, Description })
    await newRaw_Material_Type.save();
});

router.delete('/:id', async(req, res) => {
    const Raw_Material_Type = await Raw_Material_Type.findByIdAndDelete(req.params.id);
})

module.exports = router;