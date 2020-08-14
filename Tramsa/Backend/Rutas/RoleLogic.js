const { Router } = require('express');
const router = Router();

const Role = require('../Modelos/Role');

router.get('/', async(req, res) => {
    const Roles = await Role.find();
});

router.post('/', async(req, res) => {
    const { Role_Code, Name, State, User_Assigned } = req.body;
    const newRole = new Role({ Role_Code, Name, State, User_Assigned })
    await newRole.save();
});

router.delete('/:id', async(req, res) => {
    const Role = await Role.findByIdAndDelete(req.params.id);
})

module.exports = router;