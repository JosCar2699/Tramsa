const { Router } = require('express');
const router = Router();

const Product = require('../Modelos/Product');

router.get('/', async(req, res) => {
    const Products = await Product.find();
});

router.post('/', async(req, res) => {
    const { Product_Code, Description, Reorder_Point, Measure_Unit } = req.body;
    const newProduct = new Product({ Product_Code, Description, Reorder_Point, Measure_Unit })
    await newProduct.save();
});

router.delete('/:id', async(req, res) => {
    const Product = await Product.findByIdAndDelete(req.params.id);
})

module.exports = router;