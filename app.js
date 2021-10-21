const express = require("express");
const app = express();
const router = express.Router();
const contactRoutes = require("./api/routes/contacts");
const todoRoutes = require("./api/routes/todos");
const usertRoutes = require("./api/routes/users");

//Routes
app.use("/contacts", contactRoutes);
app.use("/todos", todoRoutes);
app.use("/users", usertRoutes);

//app.use(router);

module.exports = app;
