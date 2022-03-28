const { fetchAll, update } = require('../models/livre');
const Livre = require('../models/livre');
const Genre = require('../models/genre')
const Categorie = require('../models/categorie')
const Auteur = require('../models/auteur')
const User = require('../models/user')

module.exports.getAllLivre = async (req, res, next) => {
  try {
    const [allLivre] = await Livre.fetchAll();
    res.status(200).json(allLivre);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.insertLivre = async (req, res, next) => {
  try {
    //il faut recuperer l'id du nom de la categorie et du genre, du nom de l'auteur
    const postResponse = await Livre.post(req.body.nom, req.body.description, req.body.image, req.body.prix, req.body.etat, req.body.ville, req.body.idcategorie, req.body.idgenre, req.body.idauteur, req.body.iduser);
    console.log('Created !')
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putLivre = async (req, res, next) => {
    try {
      const putResponse = await Livre.update(req.body.idlivre, req.body.nom, req.body.description, req.body.image, req.body.prix, req.body.etat, req.body.ville, req.body.idcategorie, req.body.idgenre, req.body.idauteur, req.body.iduser);
      console.log('Updated !')
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };


  exports.putLivreById = async (req, res, next) => {
    try {
      const livreReqData = new Livre(req.params.idlivre, req.body.nom, req.body.description, req.body.image, req.body.prix, req.body.etat, req.body.ville, req.body.idcategorie, req.body.idgenre, req.body.idauteur, req.body.iduser)
      console.log('livreReqData update', livreReqData)
      console.log('id en question', req.params.idlivre)
      console.log('id en question', req.body.nom)
      const putResponse = await Livre.updateById(req.params.idlivre, livreReqData);
      console.log('Updated !')
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.status(500).json(err);
        //err.statusCode = 500;
      }
      next(err);
    }
  };

exports.deleteLivre = async (req, res, next) => {
    try {
        const deleteResponse = await Livre.delete(req.params.idlivre);
        console.log('Deleted !')
        res.status(200).json(deleteResponse);
    } catch (err){
        if (!err.statusCode) {
            err.statusCode = 500;
            console.log(err)
        }
    }
}

exports.getById = async (req, res, next) => {
    try {
        const getResponse = await Livre.getByIdLivre(req.params.idlivre);
        res.status(200).json(getResponse[0][0]);
    } catch (err){
        if (!err.statusCode) {
            err.statusCode = 500;
            console.log(err)
        }
    }
}
exports.getByIdUser = async (req, res, next) => {
  try {
      const getResponse = await Livre.getLivreByIdUser(req.params.iduser);
      res.status(200).json(getResponse[0]);
  } catch (err){
      if (!err.statusCode) {
          err.statusCode = 500;
          console.log(err)
      }
  }
}

exports.getByIdCategorie = async (req, res, next) => {
  try {
      const getResponse = await Livre.getLivreByIdCategorie(req.params.idcategorie);
      res.status(200).json(getResponse[0]);
  } catch (err){
      if (!err.statusCode) {
          err.statusCode = 500;
          console.log(err)
      }
  }
}



exports.getByIdGenre = async (req, res, next) => {
  try {
      const getResponse = await Livre.getLivreByIdGenre(req.params.idgenre);
      res.status(200).json(getResponse[0]);
  } catch (err){
      if (!err.statusCode) {
          err.statusCode = 500;
          console.log(err)
      }
  }
}



exports.getIdByAuteur = async (req, res, next) => {
  try {
      const getResponse = await Livre.getLivreByIdAuteur(req.params.idauteur);
      res.status(200).json(getResponse[0]);
  } catch (err){
      if (!err.statusCode) {
          err.statusCode = 500;
          console.log(err)
      }
  }
}