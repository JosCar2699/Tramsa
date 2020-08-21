const router = require('express').Router();
const User = require('../models/User');


router.get('/', async(req, res) => {
    const Users = await User.find().sort('sorting');
    console.log(Users);
    res.render('usuarios', { Users: Users});
});

router.post('/add-product', async(req, res) => {
    const newUser = new User(req.body);
    await newUser.save();

    
   res.redirect('/');
});

// router.delete('/:id', async(req, res) => {
//     const User = await User.findByIdAndDelete(req.params.id);
// })

module.exports = router;






