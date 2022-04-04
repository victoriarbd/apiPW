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
  /**
 * recherche de tous les livres
 * @returns tout les livres existants
 */
  static fetchAll(){
    return db.execute('SELECT * FROM LIVRE');
  } 
  /**
 * ajout d'un livre
 * @param nom nom du livre à ajouter
 * @param description description du livre à ajouter
 * @param image image du livre à ajouter
 * @param prix prix du livre à ajouter
 * @param etat etat du livre à ajouter
 * @param ville ville du livre à ajouter
 * @param idcategorie id de la categorie du live à ajouter
 * @param idgenre id du genre du livre à ajouter
 * @param idauteur id auteur du livre à ajouter
 * @param iduser id user du livre à ajouter
 * @returns json message succes ou erreur
 */
  static post(nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser){
    return db.execute('INSERT INTO livre (nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser) VALUES (?,?,?,?,?,?,?,?,?,?)', [nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser]);
  }
  /**
 * update un livre 
 * @param idgenre id du livre à delete 
 * @returns le livre recherché
 */
  static update(idlivre, nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser){
    return db.execute('UPDATE LIVRE SET nom = ?, description = ?, image = ?, prix = ?, etat = ?, ville = ?, idcategorie = ?, idgenre = ?, idauteur = ?, idlivre = ? WHERE idlivre = ? ', [nom, description, image, prix, etat, ville, idcategorie, idgenre, idauteur, iduser, idlivre]);
  }
  /**
 * recherche livre par iduser
 * @param idgenre id du livre à delete 
 * @returns  renvoie le livre recherché
 */
  static getLivreByIdUser(iduser){
    return db.execute('SELECT * FROM LIVRE WHERE iduser = ?', [iduser])
  }
  /**
 * Delete un livre 
 * @param idgenre id du livre à delete 
 * @returns le livre recherché
 */
  static getLivreByIdCategorie(idcategorie){
    return db.execute('SELECT * FROM LIVRE WHERE idcategorie = ?', [idcategorie])
  }
  /**
 * Delete un livre 
 * @param idgenre id du livre à delete 
 * @returns le livre recherché
 */
  static getLivreByIdGenre(idgenre){
    return db.execute('SELECT * FROM LIVRE WHERE idgenre = ?', [idgenre])
  }
  /**
 * Delete un livre 
 * @param idgenre id du livre à delete 
 * @returns le livre recherché
 */
  static getLivreByIdAuteur(idauteur){
    return db.execute('SELECT * FROM LIVRE WHERE idauteur = ?', [idauteur])
  }
  /**
 * Delete un livre 
 * @param idgenre id du livre à delete 
 * @returns le livre recherché
 */
  static getLivreByIdGenre(idgenre){
    return db.execute('SELECT * FROM LIVRE WHERE idgenre = ?', [idgenre])
  }
  /**
 * Delete un livre 
 * @param idlivre id du livre à update
 * @param livreReqData informations à update 
 * @returns success ou erreur
 */
  static updateById(idlivre, livreReqData){
    return db.execute('UPDATE LIVRE SET nom = ?, description = ?, image = ?, prix = ?, etat = ?, ville = ?, idcategorie = ?, idgenre = ?, idauteur = ?, iduser = ? WHERE idlivre = ? ', [livreReqData.nom, livreReqData.description, livreReqData.image, livreReqData.prix, livreReqData.etat, livreReqData.ville, livreReqData.idcategorie, livreReqData.idgenre, livreReqData.idauteur, livreReqData.iduser, idlivre]);
  }
/**
 * Delete un livre 
 * @param idlivre id du livre à delete 
 * @returns success ou erreur
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