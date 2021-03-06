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

router.get('/:id',(req,res) => {
    const {id} = req.params;
    dbConnection.query('SELECT * FROM notas WHERE id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log("nota no encontrada");
        }
    })
})

module.exports= router;