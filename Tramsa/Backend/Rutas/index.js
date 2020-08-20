const express = require('express');

const aplicacion = express();

/*Bases de datos*/
require('./database');

/*Puerto*/
aplicacion.set('port', 3000);

/*Enviar interfaz*/
aplicacion.use(express.static('./Frontend/Estilos'));

aplicacion.get('/', (req, res) => {
    res.sendFile('./index.html')
})

/*Verificar Servidor*/
aplicacion.listen(aplicacion.get('port'), () => {
    console.log('Se encuentra en el servidor', aplicacion.get('port'))
});

/*Rutas*/
aplicacion.use('/api/Warehouse', require('./WarehouseLogic'));
/*aplicacion.use('/api/User'), require('./UserLogic');*/