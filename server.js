const express = require('express')

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: ''
})

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT)
})
