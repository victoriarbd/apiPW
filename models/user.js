const db = require('../connection');

module.exports = class User {
  constructor(iduser, nom, prenom, email, password) {
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




/*
var User = function(user){
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin
}

User.getUserByEmail = (email, result) => {
  console.log("ici")
  db.query("SELECT * FROM user where email = `testvic@gmail.com`", (err, res) => {
    if (err){
      result(err, null)
    }
    else{
      console.log('User bien trouvé')
      result(null, res)
    }
  }
  )}
*/



/*
var User = function(user){
  this.nom = user.nom;
  this.prenom = user.prenom;
  this.email = user.email;
  this.password = user.password;
  this.isAdmin = user.isAdmin
}


//all user
User.getAllUsers = (result)=>{
  db.query('SELECT * FROM user', (err, res)=> {
      if(err){
          console.log('Error while fetching users', err)
          result(null, err)
      }
      else{
          console.log('Users fetched successfully')
          result(null, res)
      }
  })

}

//all user
User.getUserByEmail = (email,result)=>{
  dbConn.query('SELECT * FROM users where email_user = ?',[email], (err, res)=> {
      if(err){
          console.log('Error while fetching users', err)
          result(err ,null)
      }
      else{
          console.log('Users fetched successfully')
          result(null, res)
      }
  })

}
//user by ID
User.getUserByID = (iduser, result) =>{
  dbConn.query('SELECT * from users WHERE iduser=?', iduser, (err, res)=>{
      if(err){
          console.log('Error while fetching user by id ', err)
          result(null, err)
      }
      else{
          result(null, res)
      }
  })
}


//new user
User.createUser = (userReqData, result)=>{
  dbConn.query('INSERT INTO users SET ?', userReqData, (err, res)=>{
      if(err){
          console.log('Error while inserting data')
          result (null, err)
      }
      else{
          console.log('User created successfully')
          result(null, res)
      }
  })
}

//uptade user
User.updateUser = (iduser, userReqData, result)=>{
  dbConn.query("UPDATE users SET email_user=?, password_user=?, telephone_user=?, is_admin=? WHERE iduser=?", [userReqData.email_user, userReqData.password_user, userReqData.telephone_user, userReqData.is_admin, iduser], (err, res)=>{
      if(err){
          console.log('Error while uptading the user')
          result(null, err)
      }
      else{
          console.log('User update successfully')
          result(null, res)
      }
  })
}


//delete user
User.deleteUser = (iduser, result)=>{
  dbConn.query('DELETE FROM users WHERE iduser=?', [iduser], (err, res)=>{
      if(err){
          console.log('Error while deleting user')
          result(null, err)
      }
      else{
          result(null, res)
      }
  })
}

module.exports = User

*/