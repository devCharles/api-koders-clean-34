// inicia la aplicación
// poner el servidor a escuchar
// abrir conexión a la base de datos
const server = require("./src/server");
const db = require("./src/lib/db");

const port = 8080;

db.initialize();
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
