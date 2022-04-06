const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //recuperer le token dns le header d'autorisation
    const decodedToken = jwt.verify(token, process.env.TOKEN); //decoder le token
    const iduser = decodedToken.iduser; //on recupere le userId du token 
    const admin = decodedToken.isAdmin
    req.auth = { iduser }; //la requeste comporte l'user id mtn. raccourci js meme nom meme variable ici c la meme que userId: userId
    if (req.body.iduser && req.body.iduser !== iduser) { //il faut verifier que le user correspond au token
      throw 'Invalid user ID';
    } else if (admin == null){
      throw 'An error occured...'
    }else if (admin == false){
      throw 'You are not admin'
    }else { //ici tou va bien on passe la requete au prochain middleware
      next();
    }
  } catch { //extraire la verif si elle echoue 
    res.status(401).json({ 
      error: new Error('Invalid request!')
    });
  }
};