const express = require("express");

const { ctrlWrapper } = require("../../middlewares");
const { massages: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/massage", ctrlWrapper(ctrl.createMassage));

module.exports = router;
