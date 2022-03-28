const mysql = require('mysql2/promise');

const db = mysql.createPool({

    host: "eu-cdbr-west-02.cleardb.net",
 
    user: "b24e13c453dabf",

    password: "99d9dc2c",

    database: 'heroku_ef675ff4d1cace5',
 
  });

db.getConnection(function(err, connection) {
    if (err) return  cb(err);
  });

db.on('connection', function(connection){
    console.log("Connecté à la base de données MySQL!");
    connection.on('error', function(err){
        console.error(new Date(), "mysql error : ", err.code)
    });
});

module.exports = db;

// heroku config:set DATABASE_URL='mysql://b24e13c453dabf:99d9dc2c@eu-cdbr-west-02.cleardb.net/heroku_ef675ff4d1cace5?reconnect=true'