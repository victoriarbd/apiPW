const db = require('../connection');

module.exports = class Livre {
  constructor(idlivre, nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser) {
    this.idlivre = idlivre;
    this.nom = nom;
    this.description = description;
    this.image = image;
    this.prix = prix;
    this.etat = etat;
    this.ville = ville;
    this.idcategorie = idcategorie;
    this.idgenre = idgenre;
    this.idauteur = idauteur;
    this.iduser = iduser;
  }

  static fetchAll(){
    return db.execute('SELECT * FROM LIVRE');
  } 
  static post(nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser){
    return db.execute('INSERT INTO livre (nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser) VALUES (?,?,?,?,?,?,?,?,?,?)', [nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser]);
  }
  static update(idlivre, nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser){
    return db.execute('UPDATE LIVRE SET nom = ?, description = ?, image = ?, prix = ?, etat = ?, ville = ?, idcategorie = ?, idgenre = ?, idauteur = ?, idlivre = ? WHERE idlivre = ? ', [nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser, idlivre]);
  }
  static getLivreByIdUser(iduser){
    return db.execute('SELECT * FROM LIVRE WHERE iduser = ?', [iduser])
  }
  static getLivreByIdCategorie(idcategorie){
    return db.execute('SELECT * FROM LIVRE WHERE idcategorie = ?', [idcategorie])
  }
  static getLivreByIdGenre(idgenre){
    return db.execute('SELECT * FROM LIVRE WHERE idgenre = ?', [idgenre])
  }
  static getLivreByIdAuteur(idauteur){
    return db.execute('SELECT * FROM LIVRE WHERE idauteur = ?', [idauteur])
  }
  static getLivreByIdGenre(idgenre){
    return db.execute('SELECT * FROM LIVRE WHERE idgenre = ?', [idgenre])
  }
  static updateById(idlivre, livreReqData){
    return db.execute('UPDATE LIVRE SET nom = ?, description = ?, image = ?, prix = ?, etat = ?, ville = ?, idcategorie = ?, idgenre = ?, idauteur = ?, iduser = ? WHERE idlivre = ? ', [livreReqData.nom, livreReqData.description, livreReqData.image, livreReqData.prix, livreReqData.etat, livreReqData.ville, livreReqData.idcategorie, livreReqData.idgenre, livreReqData.idauteur, livreReqData.iduser, idlivre]);
  }
/**
 * Delete un livre 
 * @param idlivre id du livre à delete 
 * @returns 
 */
  static delete(idlivre){
    return db.execute('DELETE FROM LIVRE WHERE idlivre = ?', [idlivre]);
  }

  /**
   * Recherche d'un livre par id
   * @param  idlivre 
   * @returns Json object : le livre recherché
   */
  static getByIdLivre(idlivre){
    return db.execute('SELECT * FROM LIVRE WHERE idlivre = ?', [idlivre]);
  }
}