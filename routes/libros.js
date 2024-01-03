const express = require("express");
const Libro = require("../models/Libro");

const router = express.Router();

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");
 
// Obtenemos todos los libros existentes.
router.get("/", requiredScopes("read:libros"), async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(404).json({ error: "No se pudo obtener ningún libro." });
  }
});

// Obtenemos un libro por su ID
router.get("/:id", requiredScopes("read:libros"), async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(404).json({ error: "No se pudo encontrar el libro." });
  }
});

// Creamos un nuevo libro.
router.post("/", requiredScopes("write:libros"), async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.
       status(201)
      .json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el libro." });
  }
});

// Actualizamos un libro por su ID.
router.put("/:id", requiredScopes("write:libros"), async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar el Libro." });
  }
});

// Eliminamos un libro por su ID.
router.delete("/:id", requiredScopes("write:libros"), async (req, res) => {
  try { 
    await Libro.findByIdAndDelete(req.params.id);
    res.json({
      message: "El libro se ha eliminado correctamente.",
    });
  } catch (error) {
    res.status(500).json({ error: "No se pudo borrar el libro." });
  }
});

module.exports = router;
