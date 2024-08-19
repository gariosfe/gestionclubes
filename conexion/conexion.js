var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "gestionclubes.c1u6uc0kol1u.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "gestionclubes"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;