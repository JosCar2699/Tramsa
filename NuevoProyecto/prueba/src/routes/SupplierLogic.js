const { Router } = require('express');
const router = Router();

const Supplier = require('../Modelos/Supplier');

router.get('/', async(req, res) => {
    const Suppliers = await Supplier.find();
});

router.post('/', async(req, res) => {
    const { Supplier_Code, CUIT, Name, Telephone, Email, Contact, Telephone_Contact, Address } = req.body;
    const newSupplier = new Supplier({ Supplier_Code, CUIT, Name, Telephone, Email, Contact, Telephone_Contact, Address })
    await newSupplier.save();
});

router.delete('/:id', async(req, res) => {
    const Supplier = await Supplier.findByIdAndDelete(req.params.id);
})

module.exports = router;