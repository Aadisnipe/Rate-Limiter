const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/:id").get(userController.getUserById);
module.exports = router;
