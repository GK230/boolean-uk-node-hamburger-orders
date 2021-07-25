const express = require("express");
const morgan = require("morgan");

const app = express();

// Import routers

const hamburgersRouter = require("./resources/hamburgers/routes");
const ordersRouter = require("./resources/orders/routes");

// Middlewares

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/hamburgers", hamburgersRouter);
app.use("/orders", ordersRouter);

// Initalise server

app.listen(4000, () => {
  console.log("I'm running");
});
