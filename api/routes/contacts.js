const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/contactController");

router.get("/", ContactController.index());

router.post("/", ContactController.store());

router.get("/:id", ContactController.show());

router.patch("/:id", ContactController.update());

router.delete("/:id", ContactController.destroy());

module.exports = router;
