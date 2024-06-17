const connection = require("./connection");
const express = require("express");
//cors for connection of backend to frontend
const cors = require("cors");
const app = express();
//body parser
app.use(express.json());
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Backend is listen at port ${PORT}`);
});
//fetch all user details
app.get("/api/v1/details", (req, res) => {
  connection.query("SELECT * FROM details", (err, rows) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      //console.log(rows);
      return res.send(rows);
    }
  });
});
//add user details to database
app.post("/api/v1/user", (req, res) => {
  const { FirstName, LastName, Email, PhoneNumber, Address } = req.body;

  if (!FirstName || !LastName || !Email || !PhoneNumber || !Address) {
    return res.status(400).json({ error: "All fields are required" });
  }
  connection.query(
    "INSERT INTO details(FirstName,LastName,Email,PhoneNumber,Address) VALUES(?,?,?,?,?)",
    [FirstName, LastName, Email, PhoneNumber, Address],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.json(err);
      } else {
        //console.log(rows);
        return res.send(rows);
      }
    }
  );
});
