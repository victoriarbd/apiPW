const jwt = require('jsonwebtoken');
const User = require('../models/user');

/*
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //recuperer le token dns le header d'autorisation
    const decodedToken = jwt.verify(token, process.env.TOKEN); //decoder le token
    const iduser = decodedToken.iduser; //on recupere le userId du token 
    req.auth = { iduser }; //la requeste comporte l'user id mtn. raccourci js meme nom meme variable ici c la meme que userId: userId
    if (req.body.iduser && req.body.iduser !== iduser) { //il faut verifier que le user correspond au token
      throw 'Invalid user ID';
    } else { //ici tou va bien on passe la requete au prochain middleware
      next();
    }
  } catch { //extraire la verif si elle echoue 
    res.status(401).json({ 
      error: new Error('Invalid request!')
    });
  }
};*/

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //recuperer le token dns le header d'autorisation
    const decodedToken = jwt.verify(token, '1ZOIE84588787PO'); //decoder le token
    const userToken = decodedToken
    const userDataBase = await User.getByIdUser(userToken.iduser)
    if (!userDataBase || !userToken){
      return res.status(401).json({
        results: false,
        message: `L'utilisateur ${iduser} n'existe pas`
      })
    } else { //ici tou va bien on passe la requete au prochain middleware
      req.auth = userDataBase[0][0]
      console.log("test",req.auth)
      next();
    }
  } catch { //extraire la verif si elle echoue 
    res.status(401).json({ 
      error: new Error('Invalid request!')
    });
  }
};