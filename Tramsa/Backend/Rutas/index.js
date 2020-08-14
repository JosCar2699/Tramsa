const express = require('express');

const aplicacion = express();

require('./database');

aplicacion.set('port', 3000);

aplicacion.use(express.static('./Backend/Public'));

aplicacion.get('/', (req, res) => {
    res.sendFile('./index.html')
})

aplicacion.listen(aplicacion.get('port'), () => {
    console.log('Se encuentra en el servidor', aplicacion.get('port'))
});