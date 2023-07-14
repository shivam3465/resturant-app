const express = require('express');
const {reserveTable, slotsAvailable, SearchTable} = require('../controllers/reserveTable');

const router = express.Router();

router.route("/reserve").post(reserveTable);
router.route("/slots/available").post(slotsAvailable);
router.route("/:number").get(SearchTable);

module.exports = router;