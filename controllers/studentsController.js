const db = require("../utils/db.connection");

const Student = require('../models/studentsModal')

const addStudentData = async(req,res) => {
    try{
    const {email, name} = req.body;
    const student = await Student.create({
        email:email,
        name:name
    })
    console.log(student);
    res.status(201).send(`User with name : ${name} is created!`)
    }catch(err){
    res.status(500).send('Unable to make an entry.');
    }




// const {name,email,age}= req.body;

// const insertQuery = `INSERT INTO management (name, email, age) VALUES(?,?,?)`;

// db.execute(insertQuery, [name,email,age], (err)=>{
//     if(err){
//         console.log(err);
//         res.status(500).send(err.message);
//         return;
//     }

//     console.log("Students data has been inserted");

//     res.status(200).send(`Student with name ${name} successfully added`);

// })


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


const getStudentDataById = (req,res)=>{
const {id} = req.params;
const selectQuery= "select * from Management WHERE id = ?";

    db.execute(selectQuery, [id] , (err,results)=>{
    if(err){
        console.log(err);
        res.status(500).send(err.message);
        return;
    }

    if(results.length === 0){
        res.status(404).send("Student not found");
    }

    res.status(200).send(results);
    console.log("Retrieve Student data with id")
})
}

const updateStudentData = async(req,res) =>{
try{
    const {id} = req.params;
const {name}= req.body;

const student = await Student.findByPk(id);

if(!student){
    res.status(404).send("User is not found");
}

student.name=name;
await student.save();

res.status(200).send("User has been updated!");

}catch(err){
res.status(500).send("User cannot be updated");
}



// const updateQuery = `
// UPDATE Management 
// SET name = ?, email  = ?, age = ?
// WHERE id = ?
// `;


// db.execute(updateQuery, [name,email,age, id], (err, results)=>{
//     if(err){
//         console.log(err);
//         res.status(500).send(err.message);
//         return;
//     }

//     if(results.affectedRows === 0){
//         res.status(404).send("Student not found");
//         return;
//     }

//     console.log("Student updated successfully ");
//     res.status(200).send("Student updated successfully");

// });



};



const deleteStudentData = async(req,res)=>{
try{
    const {id} = req.params;
    const student = await Student.destroy({
        where:{
            id:id
        }
    })

    if(!student){
        res.status(404).send('User is not found');
    }

    res.status(200).send('User has been deleted!');

}catch(error){
    console.log(error);
    res.status(500).send("Error encountered while deleting...")
}



// const deleteQuery = `DELETE FROM management WHERE id = ?`;

// db.execute(deleteQuery, [id] , (err, results) =>{
//     if(err){
//         console.log(err);
//         res.status(500).send(err.message);
//         return;
//     }


//     if(results.affectedRows === 0){
//         res.status(404).send("Student is not found");
//         return;
//     }

//     res.status(200).send(`Student with ${id} id deleted`);

// })



}







module.exports = {
    addStudentData,
    getStudentData,
    getStudentDataById,
    updateStudentData,
    deleteStudentData
}