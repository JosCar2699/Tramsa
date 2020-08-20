const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TRAMSA', {
        useNewUrlParser: true
    })
    .then(db => console.log('Se conectó a la base'))
    .catch(err => console.error(err));


require('../Modelos/Event');