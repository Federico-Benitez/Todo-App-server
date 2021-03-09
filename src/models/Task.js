const { json } = require('express');
const dbConnection = require('../database');

class Task {
  static async getAllTask() {
    const rows = await dbConnection.query('SELECT * FROM notas');
    return rows;
  }

  static async editTask(id, { contenido, state }) {
    const query = `UPDATE notas SET contenido = '${contenido}', state = '${state}' WHERE id = ${id}`;
    await dbConnection.query(query);
    return { Status: 'Nota editada' };
  }

  static async createTask({ contenido }) {
    const query = 'INSERT INTO notas SET ?';
    const nota = {
      contenido,
      state: false
    };
    const { insertId } = await dbConnection.query(query, nota) 
    return { Status: 'Nota Creada' , insertId};
    
  }

  static async deleteTask({ id }) {
    const query = `DELETE FROM notas WHERE id=${id}`;
    await dbConnection.query(query);
    return { Status: 'Nota eliminada' };
  }

  
}

module.exports = Task;
