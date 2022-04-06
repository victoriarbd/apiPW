const mysql = require('mysql2/promise');

const db = mysql.createPool({

    host: process.env.DBHOST,
 
    user: process.env.DBUSERNAME,

    password: process.env.DBPASSWORD,

    database: process.env.DATABASE,
 
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

