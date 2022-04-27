const Reader = require("../utils/Reader.js")

class StudentService{
  
  static getStudentsWithCertification(students){
     return students.filter(student => student.haveCertification)
  }

  static getStudentsWithCreditsMoreThan(students, number){
     return students.filter(student => student.credits > number)
  }

}

module.exports = StudentService
