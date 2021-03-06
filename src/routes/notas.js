const express = require('express');
const router = express.Router();

const dbConnection = require('../database');

router.get('/all', (req,res) => {
    dbConnection.query('SELECT * FROM notas',(err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else {
            console.log("error no se pudieron obtener las notas")
        }
    });
})


module.exports= router;