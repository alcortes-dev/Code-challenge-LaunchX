# Cursos de Visual Thinking API

## Dependencias

## Diseño de componentes

## Uso de api

## Implementación

Para la implementación se realizarón los siguientes pasos, guiado por la necesidad de cada uno de ellos para avanzar en el resultado esperado.

* Obtener estudiantes
  Se crean pruebas e implemenatición de método que permita la lectura de los estudiantes.
* Crear el servicio de students
  Se crean las pruebas e implementaciones para los siguientes métodos
  * **getStudents** - Obtiene la lista completa de los estudiantes
  * **getStudentsWithCertification** - Obtiene el listado de los estudiantes que tiene certificación
  * **getStudentsWithCreditsMoreThan** - Obtiene el listado con los estudiantes que tienen créditos mayores a un valor especificado
* Crear el controlador de students
  Se crean los metodos que interactuan con el servicio de students
  * **getAllStudents** - Solicita todos los estudiantes y los envía 
  * **getMailOfCertifiedStudents** - Obtiene el listado de los estudiantes con certificación, y les aplica un map para regresar solo el listado de emails
  * **getApprovedStudents** - Obtiene el listado de los estudiantes que tengan créditos mayores a 500. Se esta tomando como posible caso de uso que el valor 500 significa que se aprobaron.
* Crear el servidor para acceder al servicio
  Se crean los enpoints para el uso del servicio
  * /v1/students/
  * /v1/students/certified
  * /v1/students/approved


