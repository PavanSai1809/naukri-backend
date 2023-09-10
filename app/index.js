const express = require("express");
const healthCheck = require("./controllers/health-check/routes");
const user = require("./controllers/user/routes");
const navbar = require("./controllers/navbar/routes");

const router = express.Router();

router.use('/health-check', healthCheck);
router.use('/user', user);
router.use('/navbar',navbar);

module.exports = router;

