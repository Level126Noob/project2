const {Client} = require('pg')
const client = new Client ({
  user: "vyrenyyniltmhq",
  password: "9abd11ca0665ae17c7a91a80e41d2507f5e1746ced38b9483b446cd7624afa56",
  host: "ec2-50-17-227-28.compute-1.amazonaws.com",
  port: 5432,
  database: "dbaskqc1scs4vk",
  ssl: true
})

client.connect()
.then(() => console.log("Connected succesfully"))
.then(() => client.query("SELECT * FROM files"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())