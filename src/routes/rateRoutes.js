const express = require("express");
const rateController = require("../controllers/rateController");

const router = express.Router();

router.get("", rateController.getRate)

module.exports = router;