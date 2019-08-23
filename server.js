const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}))

app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "scrapbook"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", (_, res) => {
  connection.query("SELECT * FROM files", function (err, data) {
    if (err) {
      return res.status(500).send("it's broken dude");
    }

    res.render("index", {
      files: data
    });
  });
});

//searchbar code==================================================================================-.-.-.-//
app.get("/api/files/:file_name", (req, res) => {
  connection.query("SELECT * FROM files WHERE file_name = ?", [req.params.file_name], function (err, result) {
    if (err) {
      return res.status(500).send("it's broken brohiem");
    }
    res.render("search",
      {files: result}
    )
    console.log(result)
  })
})
//======================================================================================================-.-.-.-.**!!@

app.delete("/api/files/:id", (req, res) => {
  connection.query("DELETE FROM files WHERE id = ?", [req.params.id], function (err, result) {
    if (err) {
      return res.status(500).send("it's broken brohiem");
    } else if (!result.affectedRows) {
      return res.status(404).send("404 dude");
    }
    res.status(200).end();
  });
});


app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});