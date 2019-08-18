const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "scrapbook"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", (_, res) => {
    if (err) {
      return res.status(500).send("it's broken guys");
    }
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/files", (_, res) => {
  connection.query("SELECT * FROM files", function(err, data) {
    if(err) {
      return res.status(500).send("It's broken guys");
    }
    console.log(result);
  res.json(result)
  })
})


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  