const express = require('express');

const app= express();

//Settings
app.set('port', process.env.PORT || 3000 );

//Middelwares

//Routes

//Run Server
app.listen(app.get('port'), () => {
    console.log('Server en el puerto', app.get('port'));
})