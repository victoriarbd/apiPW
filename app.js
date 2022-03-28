const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const auteurRoutes = require("./routes/auteur");
const categorieRoutes = require("./routes/categorie");
const genreRoutes = require("./routes/genre");
const userRoutes = require("./routes/user");
const livreRoutes = require("./routes/livre");
const db = require("./connection");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()


var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // autorise tout les domaines a acceder a mes ressources
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Acces-Control-Allow-Credentials', true)
  next();
});

app.use("/auteur", auteurRoutes);
app.use("/api/categorie", categorieRoutes);
app.use("/genre", genreRoutes);
app.use("/user", userRoutes);
app.use("/livre", livreRoutes);
//app.use('/auth', userRoutes);
module.exports = app;