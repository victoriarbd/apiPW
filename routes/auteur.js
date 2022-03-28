const express = require("express");
const Router = express.Router();
const db = require("../connection");
const auteurCtrl = require('../controllers/auteur')
const auth = require("../middleware/auth");

Router.get('/', auteurCtrl.getAllAuteur);
Router.post('/', auth, auteurCtrl.insertAuteur);
Router.put('/', auth, auteurCtrl.putAuteur);
Router.put('/:idauteur', auteurCtrl.putAuteurById)
Router.delete('/:idauteur', auth, auteurCtrl.deleteAuteur);
Router.delete('/nom/:nom', auteurCtrl.deleteByName);
Router.get('/:idauteur', auteurCtrl.getById)

module.exports = Router;