const mysql = require('mysql');
const { promisify } = require('util');

const dbConnection = mysql.createConnection({
  host: "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "lec29hgj1phvnk4w",
  password: "lwci75e2plsfer26",
  port: '3306',
  database: "hmm248zjylnjwzu8"
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('BD conectada');
  }
});

dbConnection.query = promisify(dbConnection.query);

module.exports = dbConnection;
