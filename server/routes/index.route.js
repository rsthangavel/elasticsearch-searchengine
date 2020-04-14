const express = require('express');
const router = express.Router();
const searchRoute = require('./es_search.route');
const indexRoute = require('./es_index.route');
router.use('/search', searchRoute);
router.use('/index', indexRoute);
module.exports = router;