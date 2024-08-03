const express = require("express");

const kodersUsecase = require("../usecases/koders.usecase");

const router = express.Router();

// listar todos los koders
router.get("/", (request, response) => {
  try {
    const koders = kodersUsecase.getAll();

    response.json({
      success: true,
      message: "All koders",
      data: { koders },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// obtener un koder por su id
router.get("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const koder = kodersUsecase.getById(id);

    response.json({
      success: true,
      message: "Koder by id",
      data: { koder },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// crear un koder
router.post("/", (request, response) => {
  try {
    const data = request.body;
    const newKoder = kodersUsecase.add(data);

    response.json({
      success: true,
      message: "Koder created",
      data: { koder: newKoder },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// actualizar un koder
router.patch("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;

    const koderUpdated = kodersUsecase.updateById(id, data);

    response.json({
      success: true,
      message: "Koder updated",
      data: { koder: koderUpdated },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// eliminar un koder por id
router.delete("/:id", (request, response) => {
  try {
    const id = request.params.id;
    kodersUsecase.deleteById(id);

    response.json({
      success: true,
      message: "Koder deleted",
      data: { koderDeleted: id },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
