const StudentService = require("../../services/StudentService.js")

const estudiantes = [
  { "email": "student1@visualpartnership.xyz", "credits": 508, "haveCertification": true   },
  { "email": "student2@visualpartnership.xyz", "credits": 500, "haveCertification": true   },
  { "email": "student3@visualpartnership.xyz", "credits": 430, "haveCertification": false   },
  { "email": "atudent4@visualpartnership.xyz", "credits": 501, "haveCertification": true   },
  ];

describe("Conjunto de pruebas del servicio StudentService", () => {
  
  test("Req 1: Obtener los estudiantes con cetificación.", () => {
    const certificados = StudentService.getStudentsWithCertification(estudiantes)
    expect(certificados.length).toBe(3)
  })

  test("Req 2: Obtener los estudiantes con creditos mayores a un número dado.", () => {
    let certificados = StudentService.getStudentsWithCreditsMoreThan(estudiantes, 500)
    expect(certificados.length).toBe(2)
    certificados = StudentService.getStudentsWithCreditsMoreThan(estudiantes, 450)
    expect(certificados.length).toBe(3)
  })
})



