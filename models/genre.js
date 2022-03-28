const db = require('../connection');

module.exports = class Genre {
  constructor(idgenre, nom) {
    this.idgenre = idgenre;
    this.nom = nom;
  }

  static fetchAll(){
    return db.execute('SELECT * FROM genre');
  }
  static getGenreByName(nom){
    console.log(nom)
    return db.execute('SELECT * FROM genre WHERE nom = ?', [nom]);
  }
  static post(nom){
    return db.execute('INSERT INTO genre (nom) VALUES (?)', [nom]);
  }
  static update(idgenre, nom){
    return db.execute('UPDATE genre SET nom = ? WHERE idgenre = ? ', [nom, idgenre]);
  }
  static updateById(idgenre, genreReqData){
    return db.execute('UPDATE genre SET nom = ? WHERE idgenre = ? ', [genreReqData.nom, idgenre]);
  }

  static delete(idgenre){
    return db.execute('DELETE FROM genre WHERE idgenre = ?', [idgenre]);
  }
  static getByIdGenre(idgenre){
    return db.execute('SELECT * FROM genre WHERE idgenre = ?', [idgenre]);
  }
}