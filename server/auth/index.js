const express = require("express");
const router = express.Router();

// /auth Routes

router.get("/", (req, res) => {
    res.json({
    message: "🔐 ",
  });
});

router.get("/app", (req, res) => {
  res.json({
    message: "app/ 🔐 ",
  });
});

module.exports = router;
