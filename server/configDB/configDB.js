const mysql =  require('mysql2')
const connection = mysql.createConnection({
	host: "sql10.freesqldatabase.com",
	user: "sql10715860",
	password: "t4lEfx2fYb",
	database: "sql10715860",
	port: 3306,
})

connection.connect((error) =>{
	if(!error){
        console.log("Conexión exitosa")
    }else{
        console.log("Conexión fallida")
    }
})

module.exports = connection
