const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  //:3306
  host: "localhost",
  user: "root",
  password: "password",
  database: "BiglietteriaConcertiOnLine",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET
app.get("/", (req, res) => {
  res.send("hola muchachos");
});

//get specific booking of the logged user
app.get("/api/getMyBooking", (req, res) => {
  const query =
    "SELECT sum(p.Quantita) as Quantita, p.ClienteID, b.Citta, b.Luogo, b.Gruppo, b.Prezzo, b.Replica, v.NomeAzienda FROM prenotazione as p join biglietto as b on (b.BigliettoID = p.BigliettoID) join venditore as v on(v.VenditoreID = b.VenditoreID) join cliente as c on(p.ClienteID = c.ClienteID) group by  p.ClienteID, b.Citta, b.Luogo, b.Gruppo, b.Prezzo, b.Replica, v.NomeAzienda  ";
  db.query(query, (err, result) => {
    res.send(result);
    console.log(err);
  });
});

//SELECT * FROM prenotazione as p join biglietto as b on (b.BigliettoID=p.BigliettoID) WHERE p.ClienteID=1 AND b.VenditoreID=1
app.get("/api/checkMyBooking", (req, res) => {
  const query =
    "SELECT ClienteID, BigliettoID, sum(Quantita) FROM prenotazione";
  db.query(query, (err, result) => {
    res.send(result);
    console.log(err);
  });
});

//get all ticket avaiable
app.get("/api/getTicket", (req, res) => {
  const query = "SELECT * FROM biglietto";
  db.query(query, (err, result) => {
    res.send(result);
    console.log(err);
  });
});

app.get("/api/getClient", (req, res) => {
  const query = "SELECT * FROM Cliente";
  db.query(query, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

// POST
//insert client
app.post("/api/insertClient", (req, res) => {
  const { ruolo, nome, cognome, password } = req.body;
  const query =
    "INSERT INTO cliente (Ruolo, Cognome, Nome, Codice) VALUES (?, ?, ?, ?);";
  db.query(query, [ruolo, cognome, nome, password], (err, result) => {
    console.log(err);
    res.send("done");
  });
});
//insert booking
app.post("/api/insertBook", (req, res) => {
  const { cliente, biglietto, quantita } = req.body;
  const query =
    "insert into prenotazione (ClienteID, BigliettoID, Quantita) values (?,?,?);";
  db.query(query, [cliente, biglietto, quantita], (err, result) => {
    console.log(err);
    res.send("done");
  });
});

//update quantity
app.post("/api/updateQuantity", (req, res) => {
  const { id, quantita } = req.body;
  const query = "update biglietto set Quantita= ? where BigliettoID=?";
  db.query(query, [quantita, id], (err, result) => {
    console.log(err);
    res.send("done");
  });
});

//update booking quantity
app.post("/api/updateBookingQuantity", (req, res) => {
  const { bigliettoId, quantita, clienteId } = req.body;
  const query =
    "update prenotazione set Quantita= ? where BigliettoID=? AND ClienteID=?";
  db.query(query, [quantita, bigliettoId, clienteId], (err, result) => {
    console.log(err);
    res.send("done");
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
