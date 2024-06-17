const mysql = require("mysql2");
require("dotenv").config();
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
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
