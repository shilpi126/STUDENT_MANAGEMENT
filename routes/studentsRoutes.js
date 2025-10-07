const express = require("express");
const { addStudentData, getStudentData } = require("../controllers/studentsController");
const router = express.Router();


router.get("/",getStudentData);
router.post("/add", addStudentData);

module.exports = router;