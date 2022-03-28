const Genre = require('../models/genre');
const Livre = require('../models/livre');
const { fetchAll, update } = require('../models/genre');

module.exports.getAllGenre = async (req, res, next) => {
  try {
    const [allGenre] = await Genre.fetchAll();
    res.status(200).json(allGenre);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.insertGenre = async (req, res, next) => {
  let results = await Genre.getGenreByName(req.body.nom);
  if (results[0].length > 0) {
    res.status(409).json({ message: "nom déjà existant" });
  } else {
    try {
      const postResponse = await Genre.post(req.body.nom);
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

exports.putGenre = async (req, res, next) => {
    try {
      const putResponse = await Genre.update(req.body.idgenre, req.body.nom);
      console.log('Updated !')
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.putGenreById = async (req, res, next) => {
    try {
      const genreReqData = new Genre(req.params.idgenre, req.body.nom)
      const putResponse = await Genre.updateById(req.params.idgenre, genreReqData);
      console.log('Updated !')
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

exports.deleteGenre = async (req, res, next) => {
      try {
          const deleteResponse = await Genre.delete(req.params.idgenre);
          console.log('Deleted !')
          res.status(200).json(deleteResponse);
      } catch (err){
          if (!err.statusCode) {
              res.status(403).json({ message: "Impossible de supprimer le genre!" });
          }
      }
  
}

exports.getById = async (req, res, next) => {
    try {
        const getResponse = await Genre.getByIdGenre(req.params.idgenre);
        res.status(200).json(getResponse[0][0]);
    } catch (err){
        if (!err.statusCode) {
            err.statusCode = 500;
            console.log(err)
        }
    }
}
