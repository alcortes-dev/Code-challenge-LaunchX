const { readFileSync } = require("fs");

class Reader{
  
    static readJson(file){
        const contenido = readFileSync(file);
        return JSON.parse(contenido);
    }
}

module.exports = Reader;
