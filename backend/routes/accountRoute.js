const express = require("express");
const { auth } = require("../auth/authMiddleware");
const { balance, transfer } = require("../controllers/accountController");



const router = express.Router();

router.get("/balance", auth, balance );
router.post("/transfer", auth, transfer);


module.exports = router;
