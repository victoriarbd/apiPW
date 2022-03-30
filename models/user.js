const db = require('../connection');

module.exports = class User {
  constructor(iduser, nom, prenom, email, password, isAdmin) {
    this.iduser = iduser;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin
  }

  static fetchAll(){
    return db.execute('SELECT * FROM USER');
  }
  static getUserByEmail(email){
    console.log(email)
    return db.execute('SELECT * FROM USER WHERE email = ?', [email]);
  }
  static post(nom, prenom, email, password, isAdmin){
    return db.execute('INSERT INTO USER (nom, prenom, email, password, isAdmin) VALUES (?,?,?,?,?)', [nom, prenom, email, password, isAdmin]);
  }
  static update(iduser, nom, prenom, email, password, isAdmin){
    return db.execute('UPDATE USER SET nom = ?, prenom = ?, email = ?, password = ?, isAdmin = ? WHERE iduser = ? ', [nom, prenom, email, password, isAdmin, iduser]);
  }

  static delete(iduser){
    return db.execute('DELETE FROM USER WHERE iduser = ?', [iduser]);
  }
  static getByIdUser(iduser){
    return db.execute('SELECT * FROM USER where iduser = ?',[iduser]);
  }
  static getUserByEmailPassword(email, password){
    return db.execute('SELECT * FROM USER WHERE email = ? and password = ?', [email, password]);
  }
  static updateById(iduser, userReqData){
    return db.execute('UPDATE USER SET nom = ?, prenom = ?, email = ?, password = ?, isAdmin = ? WHERE iduser = ? ', [userReqData.nom, userReqData.prenom, userReqData.email, userReqData.password, userReqData.isAdmin, iduser]);
  }
  
}
