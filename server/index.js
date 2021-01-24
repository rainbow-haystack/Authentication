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

app.listen(process.env.PORT || 3000, () => {
  console.log(`Starting Express Server at :clock: => ${process.env.PORT}`);
});
