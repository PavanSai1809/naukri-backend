const express = require("express");
const { getSetup,updateSetup} = require("./controller");

const router = express.Router();

// Get
router.get('/get-setup', getSetup);
// router.get('/get-connect', getConnect);



// Put
router.put('/update-setup', updateSetup);
// router.put('/update-connect', updateConnect);


//post


module.exports = router;