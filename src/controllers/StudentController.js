const Reader = require("../utils/Reader.js");
const StudentService = require("../services/StudentService.js");

class StudentController{
  
    static getAllStudents(){
        return Reader.readJson("./src/data/visualpartners.json");
    }

    static getMailOfCertifiedStudents(){
        let students = Reader.readJson("./src/data/visualpartners.json");
        let studentsCertified = StudentService.getStudentsWithCertification(students);
        return studentsCertified.map(student => student.email);
    }

    static getApprovedStudents(){
        let students = Reader.readJson("./src/data/visualpartners.json");
        return StudentService.getStudentsWithCreditsMoreThan(students, 500);
    }

}

module.exports = StudentController;
