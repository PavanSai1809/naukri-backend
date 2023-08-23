const express = require("express");
const { getHealthCheck } = require("./controller");

const router = express.Router();

router.get('/', getHealthCheck);

module.exports = router;
