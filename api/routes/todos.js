const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todosController");

router.get("/", TodoController.index());

router.post("/", TodoController.store());

router.get("/:id", TodoController.show());

router.patch("/:id", TodoController.update());

router.delete("/:id", TodoController.destroy());

module.exports = router;
