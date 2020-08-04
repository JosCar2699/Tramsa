const { Schema, model } = require('mongoose');

const InvoiceSchema = new Schema({
    Company_Name: { type: String, required: true },
    CUIT: { type: String, required: true },
    Telephone: { type: String, required: true },
    Greeting_Message: { type: String, required: true },
    Company_Address: { type: String, required: true },
    Invoice_User: { type: String, required: true },
    Date: { type: String, required: true },
    Product: { type: String, required: true },
    Product_Quantity: { type: String, required: true },
    Discount: { type: String, required: true },
    Tax: { type: String, required: true },
    Total: { type: String, required: true },
})

module.exports = model('Invoice', InvoiceSchema);