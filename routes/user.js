const express = require("express");
const { register, Login, auth } = require("../controllers/user.controller");
const {
  registerRules,
  validator,
  loginRules
} = require("../middleware/validator");
const verifAuth = require("../middleware/verifAuth");
const router = express.Router();

router.post("/register", registerRules(), validator, register);
router.post("/Login", loginRules(), Login);
router.get("/auth", verifAuth, auth);

module.exports = router;
