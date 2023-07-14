const express = require('express');
const makeOrder = require('../controllers/order');

const router = express.Router();

router.route("/take").post(makeOrder);

module.exports = router;