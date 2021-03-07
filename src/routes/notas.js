const express = require('express');
const router = express.Router();

const dbConnection = require('../database');

router.get('/', (req, res) => {
  dbConnection.query('SELECT * FROM notas', (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  dbConnection.query(
    'SELECT * FROM notas WHERE id=?',
    [id],
    (err, rows, fields) => {
      if (err) throw err;
      if (!err) {
        res.json(rows[0]);
      } else {
        //TODO: Arreglar, arrojar 404 en caso de no encontrar
        console.log('nota no encontrada');
      }
    }
  );
});

router.post('/', (req, res) => {
  const query = 'INSERT INTO notas SET ?';

  const { contenido } = req.body;
  const nota = {
    contenido: contenido,
    state: false
  };

  dbConnection.query(query, nota, (error) => {
    if (error) throw error;
    res.json({ Status: 'Nota agregada' });
  });
});

router.put('/:id', (req, res) => {
  const { contenido, state } = req.body;
  const { id } = req.params;
  //TODO: Arreglar, arrojar 404 en caso de no encontrar

  const query = `UPDATE notas SET contenido = '${contenido}', state = '${state}' WHERE id = ${id}`;
  dbConnection.query(query, (error) => {
    if (error) throw error;
    res.json({ Status: 'Nota editada' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  //TODO: Arreglar, arrojar 404 en caso de no encontrar

  const query = `DELETE FROM notas WHERE id=${id}`;
  dbConnection.query(query, (error) => {
    if (error) throw error;
    res.json({ Status: 'Nota eliminada' });
  });
});

module.exports = router;
