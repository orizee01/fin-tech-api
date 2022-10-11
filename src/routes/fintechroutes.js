const express = require('express');
const router = express.Router();
const finTech = require('../controller/fintech.js')


router.get('/fintech', finTech)


module.exports = router;