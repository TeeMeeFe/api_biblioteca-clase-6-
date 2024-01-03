const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");

const autenticacion = auth({
  audience : "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

app.use("/libros", autenticacion, librosRouter);

app.use(errorHandler);

const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor local creado en el puerto ${puerto}.`);
});
