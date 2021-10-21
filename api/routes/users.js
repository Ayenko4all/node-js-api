const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");

router.post("/register", UserController.register());

router.post("/login", UserController.login());

router.get("/:id", UserController.show());

router.patch("/:id", UserController.update());

router.delete("/:id", UserController.destroy());

module.exports = router;
