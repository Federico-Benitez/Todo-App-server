const express = require('express');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000 );

//Middelwares
app.use(express.json());

//Routes
app.use(require('./routes/notas'))

//Run Server
app.listen(app.get('port'), () => {
    console.log('Server en el puerto', app.get('port'));
})