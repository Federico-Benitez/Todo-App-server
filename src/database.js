const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'process.env.DB_HOST,',
  user: 'process.env.DB_USER',
  password: 'process.env.DB_PASS',
  port: '3306',
  database: 'process.env.DB_NAME'
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('BD conectada');
  }
});

module.exports = dbConnection;
