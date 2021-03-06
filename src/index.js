const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pendu_account',
  connectionLimit:10
});

connection.connect  (function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO accounts (username,password,email,email_password,contact_email,type_account) VALUES ('Company Inc', 'Highway 37','zre','zer','ezr','instagram')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});