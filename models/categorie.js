const db = require('../connection');

module.exports = class Categorie {
  constructor(idcategorie, nom) {
    this.idcategorie = idcategorie;
    this.nom = nom;
  }

  static fetchAll(){
    return db.execute('SELECT * FROM categorie');
  }
  static getCategorieByName(nom){
    console.log(nom)
    return db.execute('SELECT * FROM categorie WHERE nom = ?', [nom]);
  }
  static post(nom){
    return db.execute('INSERT INTO categorie (nom) VALUES (?)', [nom]);
  }
  static update(idcategorie, nom){
    return db.execute('UPDATE categorie SET nom = ? WHERE idcategorie = ? ', [nom, idcategorie]);
  }
  static updateById(idcategorie, categorieReqData){
    return db.execute('UPDATE categorie SET nom = ? WHERE idcategorie = ? ', [categorieReqData.nom, idcategorie]);
  }

  static delete(idcategorie){
    return db.execute('DELETE FROM categorie WHERE idcategorie = ?', [idcategorie]);
  }
  static getByIdCategorie(idcategorie){
    return db.execute('SELECT * FROM categorie WHERE idcategorie = ?', [idcategorie]);
  }
  static deleteCatByName(nom){
    console.log("ojuiohuihiuhuiuio")
    console.log(nom)
    return db.execute('DELETE FROM categorie WHERE nom = ?', [nom]);
  }

}