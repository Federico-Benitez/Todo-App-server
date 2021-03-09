const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
  getLastId
} = require('../controllers/TaskController');

const dbConnection = require('../database');

router.get('/', getAllTasks);

router.post('/', createTask);

router.put('/:id', editTask);

router.delete('/:id', deleteTask);

router.get('/lastId', getLastId)

module.exports = router;
