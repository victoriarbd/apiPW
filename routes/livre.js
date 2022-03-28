const express = require("express");
const Router = express.Router();
const db = require("../connection");
const livreCtrl = require('../controllers/livre')
const auth = require("../middleware/auth");

Router.get('/', livreCtrl.getAllLivre);
Router.post('/', auth, livreCtrl.insertLivre);
Router.put('/', auth, livreCtrl.putLivre);
Router.put('/:idlivre', auth, livreCtrl.putLivreById)
Router.delete('/:idlivre', auth, livreCtrl.deleteLivre)
Router.get('/:idlivre', livreCtrl.getById)
Router.get('/user/:iduser', livreCtrl.getByIdUser)
Router.get('/categorie/:idcategorie', livreCtrl.getByIdCategorie)
Router.get('/genre/:idgenre', livreCtrl.getByIdGenre)
Router.get('/auteur/:idauteur', livreCtrl.getIdByAuteur)




module.exports = Router;