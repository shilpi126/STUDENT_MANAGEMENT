const express = require("express");
const db = require("./utils/db.connection");
const studentsRouter = require("./routes/studentsRoutes")
const app = express();
const studentsModal = require("./models/studentsModal");


app.use(express.json());


app.get("/", (req,res)=>{
    console.log("Hello world");
})


app.use("/students", studentsRouter);


db.sync({force:false}).then(()=>{
app.listen(4000,()=>{
    console.log("server is running on port 4000");
})
}).catch((err)=>{
    console.log(err);
})
