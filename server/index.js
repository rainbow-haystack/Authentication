const express = require("express");
const volleyball = require("volleyball");
require("dotenv").config();

const app = express();

app.use(volleyball);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "OK ",
  });
});

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found - " + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Starting Express Server at :clock: => ${process.env.PORT}`);
});
