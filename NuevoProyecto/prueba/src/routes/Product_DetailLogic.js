const { Router } = require('express');
const router = Router();

const Product_Detail = require('../Modelos/Product_Detail');

router.get('/', async(req, res) => {
    const Product_Details = await Product_Detail.find();
});

router.post('/', async(req, res) => {
    const { Product_Code, Raw_Material_Code } = req.body;
    const newProduct_Detail = new Product_Detail({ Product_Code, Raw_Material_Code })
    await newProduct_Detail.save();
});

router.delete('/:id', async(req, res) => {
    const Product_Detail = await Product_Detail.findByIdAndDelete(req.params.id);
})

module.exports = router;