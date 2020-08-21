const { Router } = require('express');
const router = Router();

const Client = require('../Modelos/Client');

router.get('/', async(req, res) => {
    const Clients = await Client.find();
});

router.post('/', async(req, res) => {
    const { CUIT, Entry_Date, First_Lastname, Second_Lastname, Name, State, Telephone, Email, Address } = req.body;
    const newClient = new Client({ CUIT, Entry_Date, First_Lastname, Second_Lastname, Name, State, Telephone, Email, Address })
    await newClient.save();
});

router.delete('/:id', async(req, res) => {
    const Client = await Client.findByIdAndDelete(req.params.id);
})

module.exports = router;