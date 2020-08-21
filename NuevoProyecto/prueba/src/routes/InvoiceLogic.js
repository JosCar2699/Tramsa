const { Router } = require('express');
const router = Router();

const Invoice = require('../Modelos/Invoice');

router.get('/', async(req, res) => {
    const Invoices = await Invoice.find();
});

router.post('/', async(req, res) => {
    const { Company_Name, CUIT, Telephone, Greeting_Message, Company_Address, Invoice_User, Date, Product, Product_Quantity, Discount, Tax, Total } = req.body;
    const newInvoice = new Invoice({ Company_Name, CUIT, Telephone, Greeting_Message, Company_Address, Invoice_User, Date, Product, Product_Quantity, Discount, Tax, Total })
    await newInvoice.save();
});

router.delete('/:id', async(req, res) => {
    const Invoice = await Invoice.findByIdAndDelete(req.params.id);
})

module.exports = router;