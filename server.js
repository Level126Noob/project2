const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path")
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "./views/layouts")
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

//renders index (home page)
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

//searchbar code==============================it's working now====================================================-.-.-.-//
app.get("/search/:file_name", (req, res) => {
  connection.query("SELECT * FROM files WHERE file_name = ?", [req.params.file_name], function (err, result) {
    if (err) {
      return res.status(500).send("it's broken brohiem");
    }
    res.render("search", {
      files: result
    })

  })
})
//======================================================================================================-.-.-.-.**!!@

//descending page api route==================================================================================================
app.get("/descending", (req, res) => {
  connection.query("SELECT * FROM files ORDER BY created_at DESC", [req.params.created_at], function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
    res.render("descending", {
      files: result
    })
  })
})
//=======================================================================================================================

//==============================Putting filepath into mySql==============================================================
app.post("/:filename, file_type", (req, res) => {
  connection.query("INSERT INTO files (file_name, file_type) VALUES (?, ?)", [req.body.file_name], function (err, data) {
    if (err) {
      throw err;
    }

    res.json({
      id: result.insertId
    });
    console.log(result)
  })
})
//=======================================================================================================================

//delete button below
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