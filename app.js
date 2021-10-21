const express = require("express");
const app = express();
const router = express.Router();
const contactRoutes = require("./api/routes/contacts");
const todoRoutes = require("./api/routes/todos");
const usertRoutes = require("./api/routes/users");
const morgan = require("morgan");

app.use(morgan("dev"));

//Routes
app.use("/contacts", contactRoutes);
app.use("/todos", todoRoutes);
app.use("/users", usertRoutes);

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: { message: error.message },
  });
});

//app.use(router);

module.exports = app;
