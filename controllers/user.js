const { fetchAll, update } = require("../models/user");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../connection");
const hasher = require("../save");
//const auth = require('../middleware/auth');

exports.signUp = async (req, res) => {
  let results = await User.getUserByEmail(req.body.email);

  if (results[0].length > 0) {
    res.status(409).json({ message: "email déjà existant" });
  } else {
    const hash = hasher(req.body.password);
    const user = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: hash,
      isAdmin: 0,
    };
    User.post(user.nom, user.prenom, user.email, user.password, user.isAdmin)
      .then(() => {
        res.status(201).json({ message: "User crée" });
      })
      .catch((error) => res.status(500).json({ error }));
  }
};

module.exports.login = async (req, res) => {
  let result = await User.getUserByEmailPassword(
    req.body.email,
    hasher(req.body.password)
  );
  console.log(result[0]);
  if (!result[0][0]) {
    res.status(401).json({
      message: "Invalide mot de passe ou adresse mail !",
    });
  } else {
    const token = jwt.sign(
      {
        email: result[0][0].email,
        iduser: result[0][0].iduser,
        isAdmin: result[0][0].isAdmin,
      },
     '1ZOIE84588787PO',
      { expiresIn: "5h" }
    );
    res
      .status(200)
      .json({
        token: token,
        email: result[0][0].email,
        isAdmin: result[0][0].isAdmin,
        iduser: result[0][0].iduser,
      });
  }
};

module.exports.getAllUser = async (req, res, next) => {
  try {
    const [allUser] = await User.fetchAll();
    res.status(200).json(allUser);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.insertUser = async (req, res, next) => {
  try {
    const postResponse = await User.post(
      req.body.nom,
      req.body.prenom,
      req.body.email,
      req.body.password,
      req.body.isAdmin
    );
    console.log("Created !");
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putUser = async (req, res, next) => {
  try {
    const putResponse = await User.update(
      req.body.iduser,
      req.body.nom,
      req.body.prenom,
      req.body.email,
      req.body.password,
      req.body.isAdmin
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

exports.putUserById = async (req, res, next) => {
  const luser = await User.getByIdUser(req.params.iduser)
    const luser2 = luser[0][0]
    const iduserr = luser2.iduser
    if (req.auth.iduser != iduserr){
      res.status(401).send({
        results: false,
        Message: "Tu n'es pas autorisé à modifier cette annonce"
      })
    }else{
      try {
        const hash = hasher(req.body.password);
        const userReqData = new User(req.params.iduser, req.body.nom, req.body.prenom, req.body.email, hash, req.body.isAdmin)
        const putResponse = await User.updateById(req.params.iduser, userReqData);
        console.log('Updated !')
        res.status(200).json(putResponse);
      } catch (err) {
        if (!err.statusCode) {
          //err.status(500).json(err);
          err.statusCode = 500;
        }
        next(err);
      }
    }
};

exports.deleteUser = async (req, res, next) => {
  if (!req.auth.isAdmin){
    res.status(401).send({
      results: false,
      Message: "Tu n'es pas un administrateur"
    })
  }else{
    try {
      const deleteResponse = await User.delete(req.params.iduser);
      console.log("Deleted !");
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err);
      }
    }
  }
};

exports.getById = async (req, res, next) => {
  try {
    const userr = await User.getByIdUser(req.params.iduser);
    res.status(200).json(userr[0][0]);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err);
    }
  }
};
