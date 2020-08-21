const { Router } = require('express');
const router = Router();

const Event = require('../Modelos/Event');

router.get('/', async(req, res) => {
    const Events = await Event.find();
});

router.post('/', async(req, res) => {
    const { Event_Code, Description } = req.body;
    const newEvent = new Event({ Event_Code, Description })
    await newEvent.save();
});

router.delete('/:id', async(req, res) => {
    const Event = await Event.findByIdAndDelete(req.params.id);
})

module.exports = router;