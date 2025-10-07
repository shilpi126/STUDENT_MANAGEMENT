const db = require("../utils/db.connection");

// POST /students → Insert a new student.
// GET /students → Retrieve all students.
// GET /students/:id → Retrieve a student by ID.
// PUT /students/:id → Update student details.
// DELETE /students/:id → Delete a student by ID.

const addStudentData = (req,res) => {
const {name,email,age}= req.body;

const insertQuery = `INSERT INTO management (name, email, age) VALUES(?,?,?)`;

db.execute(insertQuery, [name,email,age], (err)=>{
    if(err){
        console.log(err);
        res.status(500).send(err.message);
        return;
    }

    console.log("Students data has been inserted");

    res.status(200).send(`Student with name ${name} successfully added`);

})


}




const getStudentData = (req,res) => {


const selectQuery = `Select * from Management`;

db.execute(selectQuery,  (err,results)=>{
    if(err){
        console.log(err);
        res.status(500).send(err.message);
        return;
    }

    console.log("Get all data");

    res.status(200).send(results);

})


}







module.exports = {
    addStudentData,
    getStudentData
}