const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"greatJob108",
    database:"students_management",
})


db.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Connection has been created");
    
    const createStudentsTable = `create table IF NOT EXISTS Management(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    age INT
    )`;

    db.execute(createStudentsTable, (err) => {
        if(err){
        console.log(err);
        db.end();
        return;
    }

    console.log("Table is created");
    
    })
})



module.exports = db;


