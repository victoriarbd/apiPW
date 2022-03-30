const Categorie = require("../models/categorie");
const { fetchAll, update } = require("../models/categorie");
const User = require("../models/user");

module.exports.getAllCategorie = async (req, res, next) => {
  try {
    const [allCategorie] = await Categorie.fetchAll();
    res.status(200).json(allCategorie);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.insertCategorie = async (req, res, next) => {
  console.log("test", req.auth.isAdmin);
  if (!req.auth.isAdmin) {
    res.status(401).send({
      results: false,
      Message: "Tu n'es pas un administrateur",
    });
  } else {
    let results = await Categorie.getCategorieByName(req.body.nom);
    if (results[0].length > 0) {
      res.status(409).json({ message: "nom déjà existant" });
    } else {
      try {
        const postResponse = await Categorie.post(req.body.nom);
        console.log("Created !");
        res.status(201).json(postResponse);
      } catch (err) {
        if (!err.statusCode) {
          console.log("errreor", err);
          err.statusCode = 500;
        }
        next(err);
      }
    }
  }
};

exports.putCategorie = async (req, res, next) => {
  try {
    const putResponse = await Categorie.update(
      req.body.idcategorie,
      req.body.nom
    );
    console.log("Updated !");
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.putCategorieById = async (req, res, next) => {
  console.log("test", req.auth.isAdmin);
  if (!req.auth.isAdmin) {
    res.status(401).send({
      results: false,
      Message: "Tu n'es pas un administrateur",
    });
  } else {
    try {
      const categorieReqData = new Categorie(
        req.params.idcategorie,
        req.body.nom
      );
      console.log("userReqData update", categorieReqData);
      const putResponse = await Categorie.updateById(
        req.params.idcategorie,
        categorieReqData
      );
      console.log("Updated !");
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
exports.deleteCategorie = async (req, res, next) => {
  if (!req.auth.isAdmin){
    res.status(401).send({
      results: false,
      Message: "Tu n'es pas un administrateur"
    })
  }else{
    try {
        const deleteResponse = await Categorie.delete(req.params.idcategorie);
        console.log('Deleted !')
        res.status(200).json(deleteResponse);
    } catch (err){
        if (!err.statusCode) {
            res.status(500).json({ message: "Impossible de supprimer la catégorie!" });
        }
    }
  }
}
exports.deleteByName = async (req, res, next) => {
  try {
    console.log("ok", req.params.nom);
    const deleteResponse = await Categorie.deleteCatByName(req.params.nom);
    console.log("Deleted !");
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err);
    }
  }
};

exports.getById = async (req, res, next) => {
  try {
    const getResponse = await Categorie.getByIdCategorie(
      req.params.idcategorie
    );
    res.status(200).json(getResponse[0][0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err);
    }
  }
};
