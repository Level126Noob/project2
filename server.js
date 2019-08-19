const express = require('express')

<<<<<<< HEAD
const app = express()
const PORT = 8080
=======
const app = express();
const PORT = process.env.PORT || 8080;
>>>>>>> 50f1213852ccc703b8f41afd030c7037af292d5e

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

<<<<<<< HEAD
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var mysql = require('mysql')
=======
var mysql = require("mysql");
>>>>>>> 50f1213852ccc703b8f41afd030c7037af292d5e

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
<<<<<<< HEAD
  user: 'root',
  password: 'password',
  database: ''
})
=======
  user: "root",
  password: "password",
  database: "scrapbook"
});
>>>>>>> 50f1213852ccc703b8f41afd030c7037af292d5e

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

<<<<<<< HEAD
app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT)
})
=======
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
>>>>>>> 50f1213852ccc703b8f41afd030c7037af292d5e
