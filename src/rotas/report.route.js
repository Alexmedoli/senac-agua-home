const express = require("express");
const Report = require('../models/report.model.js');
const router = express.Router();
const { getReports, getReport, postReport, putReport, deleteReport } = require("../controllers/report.controller.js");

router.get('/', getReports);
router.get('/:id', getReport);
router.post('/', postReport);
router.put('/:id', putReport);
router.delete('/:id', deleteReport);

module.exports = router;