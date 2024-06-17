const mysql = require("mysql2");
require("dotenv").config();
var mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections:true,
  connectionLimit:10,
  queueLimit:0,
});
mysqlConnection.connect((error) => {
  if (error) {
    console.log(
      "Error in DB connection: " + JSON.stringify(error, undefined, 2)
    );
    return;
  } else {
    console.log("DB connection is successful");
  }
});

module.exports = mysqlConnection;
