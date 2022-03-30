const { fetchAll, update } = require('../models/auteur');
const Auteur = require('../models/auteur');

module.exports.getAllAuteur = async (req, res, next) => {
  try {
    const [allAuteur] = await Auteur.fetchAll();
    res.status(200).json(allAuteur);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.insertAuteur = async (req, res, next) => {
  if (!req.auth.isAdmin) {
    res.status(401).send({
      results: false,
      Message: "Tu n'es pas un administrateur",
    });
  } else {
      try {
        const postResponse = await Auteur.post(req.body.nom, req.body.prenom);
        console.log('Created !')
        res.status(201).json(postResponse);
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
  }
};

exports.putAuteur = async (req, res, next) => {
    try {
      const putResponse = await Auteur.update(req.body.idauteur, req.body.nom, req.body.prenom);
      console.log('Updated !')
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.putAuteurById = async (req, res, next) => {
    console.log(req.auth.isAdmin)
    if (!req.auth.isAdmin) {
      res.status(401).send({
        results: false,
        Message: "Tu n'es pas un administrateur",
      });
    } else {
        try {
          const auteurReqData = new Auteur(req.params.idauteur, req.body.nom, req.body.prenom)
          const putResponse = await Auteur.updateById(req.params.idauteur, auteurReqData);
          console.log('Updated !')
          res.status(200).json(putResponse);
        } catch (err) {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        }
      }
  };

exports.deleteAuteur = async (req, res, next) => {
  if (!req.auth.isAdmin){
    res.status(401).send({
      results: false,
      Message: "Tu n'es pas un administrateur"
    })
  }else{
    try {
        const deleteResponse = await Auteur.delete(req.params.idauteur);
        console.log('Deleted !')
        res.status(200).json(deleteResponse);
    } catch (err){
        if (!err.statusCode) {
          res.status(500).json({ message: "Impossible de supprimer l'auteur!" });
        }
    }
  }
}

exports.deleteByName = async (req, res, next) => {
  try {
     console.log("ok",req.params.nom)
      const deleteResponse = await Auteur.deleteAuteurByName(req.params.nom);
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
        const deleteResponse = await Auteur.getByIdAuteur(req.params.idauteur);
        res.status(200).json(deleteResponse[0][0]);
    } catch (err){
        if (!err.statusCode) {
            err.statusCode = 500;
            console.log(err)
        }
    }
}
