const express = require("express");
const Router = express.Router();
const db = require("../connection");
const categorieCtrl = require('../controllers/categorie')
const auth = require('../middleware/auth')

Router.get('/', categorieCtrl.getAllCategorie);
Router.post('/', auth, categorieCtrl.insertCategorie);
Router.put('/', categorieCtrl.putCategorie);
Router.put('/:idcategorie', auth, categorieCtrl.putCategorieById);
Router.delete('/:idcategorie', auth, categorieCtrl.deleteCategorie)
Router.get('/:idcategorie', categorieCtrl.getById)
Router.delete('/nom/:nom', categorieCtrl.deleteByName)

module.exports = Router;