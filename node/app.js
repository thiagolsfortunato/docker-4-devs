#!/usr/bin/env node
const mysql = require("mysql");
const express = require("express");
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(port)

console.log(`Aplicação teste executando em http://localhost:${port}/save`);

app.post('/save', (req, res) => {
  saveMessage(req.body) ? res.send("Mensagem salva com sucesso!") : res.send("Erro ao salvar mensagem");
});

var poll = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "user",
  database: process.env.MYSQL_DB || "chat"
});

function saveMessage(msg) {
  poll.getConnection(function(err, db) {
    if (err) throw err;
    console.log("Conectado ao Banco de Dados!");
    db.query(
      "INSERT INTO messages SET ?",
        { message: msg.content.toString() },
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
    );
  })
}
