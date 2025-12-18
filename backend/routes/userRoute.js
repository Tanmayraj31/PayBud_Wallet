const express = require('express');
const { signup, signin, bulk } = require('../controllers/userController');
const {auth}= require("../auth/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/bulk",auth, bulk);

module.exports = router;