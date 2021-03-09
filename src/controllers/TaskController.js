const Task = require('../models/Task');

module.exports = {
  async getAllTasks(req, res) {
    const tasks = await Task.getAllTask();
    res.json(tasks);
  },
  async deleteTask(req, res) {
    await Task.deleteTask(req.params);
    return res.status(201).json('Eliminacion correcta');
  },

  async editTask(req, res) {
    const { id } = req.params;
    await Task.editTask(id, req.body);
    return res.status(201).json('Edit correcto');
  },
  async createTask(req, res) {
    const { insertId } = await Task.createTask(req.body);    
    return res.status(201).json(insertId);
  },

  
};
