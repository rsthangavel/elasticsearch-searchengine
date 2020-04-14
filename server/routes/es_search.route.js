const express = require('express');
const router = express.Router();
const controller = require('../controllers/es_search.controller');

router.route('/')
    .post(controller.search);
module.exports =  router;