const express = require("express");
const volleyball = require("volleyball");
require("dotenv").config();

const app = express();

app.use(volleyball);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "🦄🌈✨Hello World! 🌈✨'",
  });
});

function notFound(req, res, next) {
  res.status(403);
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



app.listen(process.env.PORT || 3000, () => {
  console.log(`Starting Express 🖥  at => ${process.env.SERVER_URL}${process.env.PORT}`);
  // console.log(process.env)
});
