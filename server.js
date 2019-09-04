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

app.get("/", (_, res) => {
  res.render("login")
})
//renders index (home page)
app.get("/home", (_, res) => {
  connection.query("SELECT * FROM files", function (err, data) {
    if (err) {
      return res.status(500).send("it's broken dude");
    }

    res.render("home", {
      files: data
    });
  });
});

// //code for rendering the png image as a path==============================================================================
// app.get("/image.png", (req, res) => {
//   res.sendFile(path.join(__dirname, "./uploads/image.png"));
// });
//========================================================================================================================


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

//==============================Putting filepath into mySql (used cloudinary instead)==============================================================
// app.post("/:filename, file_type", (req, res) => {
//   connection.query("INSERT INTO files (file_name, file_type) VALUES (?, ?)", [req.body.file_name], function (err, data) {
//     if (err) {
//       throw err;
//     }

//     res.json({
//       id: result.insertId
//     });
//     console.log(result)
//   })
// })
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

//get request for login page to render on localhost8000:/login/=====================
app.get("/login/", (_, res) => {
  res.render("login")
})
//=====================================================================================

//post request to put registering a new username and password into the userpass column==
app.post("/login/:userpass", (req, res) => {
  connection.query("INSERT INTO users (userpass) VALUE (?)", [req.params.userpass], function (err, result) {
    if (err) {
      throw err
    }
    res.json({
      id: result.insertId
    });
  })
});
//=========================================================================================

//=========================checking if the userpass is valid===============================

app.get("/login/:userpass", (req, res) => {
  connection.query("SELECT userpass FROM users WHERE userpass = ?", [req.params.userpass], function (err, result){
    if (err) {
      throw err
    }
    console.log(result);
    if (result.length === 0) {
      return res.status(401).send("Use a valid username or password");
    }
    res.render("login", {users: result})
  })
});

//=========================================================================================


app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});