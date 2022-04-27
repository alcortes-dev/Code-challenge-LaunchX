const express = require("express");
const StudentController = require("./src/controllers/StudentController.js");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/v1/students/approved/", (req, res) => {
    let students = StudentController.getApprovedStudents();
    res.status(200).json(students);
});

app.get("/v1/students/certified/", (req, res) => {
    let students = StudentController.getMailOfCertifiedStudents();
    res.status(200).json(students);
});

app.get("/v1/students/", (req, res) => {
    let students = StudentController.getAllStudents();
    res.status(200).json(students);
});


app.listen(PORT, () => console.log(`Servicio Students Visual Thinking se encuentra a la escucha en puerto ${PORT}`));
