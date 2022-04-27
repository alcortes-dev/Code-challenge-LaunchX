const Reader = require("../../utils/Reader.js")

describe("Pruebas para metodos de lectura de la clase Reader", () => {
  test("Prueba del metodo de lectura de archivos JSON", () => {
    const esperado = {data: "caso de prueba exitoso"};
    const contenido = Reader.readJson("./src/data/prueba.json");
    expect(contenido).toMatchObject(esperado)
  })
})
