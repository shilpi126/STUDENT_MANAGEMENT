const express = require("express");
const { addStudentData, getStudentData, getStudentDataById, updateStudentData, deleteStudentData } = require("../controllers/studentsController");
const router = express.Router();


router.get("/",getStudentData);
router.post("/", addStudentData);
router.get("/:id",getStudentDataById);
router.put("/:id",updateStudentData);
router.delete("/:id",deleteStudentData);

module.exports = router;