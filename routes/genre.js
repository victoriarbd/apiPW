const express = require("express");
const Router = express.Router();
const db = require("../connection");
const genreCtrl = require('../controllers/genre')
const auth = require('../middleware/auth')

Router.get('/', genreCtrl.getAllGenre);
Router.post('/', auth, genreCtrl.insertGenre);
Router.put('/', auth, genreCtrl.putGenre);
Router.put('/:idgenre', auth ,genreCtrl.putGenreById);
Router.delete('/:idgenre', auth, genreCtrl.deleteGenre)
Router.get('/:idgenre', genreCtrl.getById)

module.exports = Router;