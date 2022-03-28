const db = require('../connection');

module.exports = class Auteur {
  constructor(idauteur, nom, prenom) {
    this.idauteur = idauteur;
    this.nom = nom;
    this.prenom = prenom
  }

  static fetchAll(){
    return db.execute('SELECT * FROM auteur');
  }
  static post(nom, prenom){
    return db.execute('INSERT INTO auteur (nom, prenom) VALUES (?,?)', [nom, prenom]);
  }
  static update(idauteur, nom, prenom){
    return db.execute('UPDATE auteur SET nom = ?, prenom = ? WHERE idauteur = ? ', [nom, prenom, idauteur]);
  }
  static updateById(idauteur, auteurReqData){
    return db.execute('UPDATE auteur SET nom = ?, prenom = ? WHERE idauteur = ? ', [auteurReqData.nom, auteurReqData.prenom, idauteur]);
  }
  static delete(idauteur){
    return db.execute('DELETE FROM auteur WHERE idauteur = ?', [idauteur]);
  }
  static getByIdAuteur(idauteur){
    return db.execute('SELECT * FROM auteur WHERE idauteur = ?', [idauteur]);
  }
  static deleteAuteurByName(nom){
    console.log(nom)
    return db.execute('DELETE FROM auteur WHERE nom = ?', [nom]);
  }
}