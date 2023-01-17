const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/About", function (req, res) {
  res.send("About this wiki");
});
router.get("/Service", function (req, res) {
    res.send("servive this wiki");
  });
  

module.exports = router;