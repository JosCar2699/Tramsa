const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/orderEjemplo', {
  useNewUrlParser: true
})

// mongoose.connect('mongodb://localhost/TRAMSA', {
//   useNewUrlParser: true
// })
  .then(db => console.log('db is connected'))
  .catch(err => console.log(err));