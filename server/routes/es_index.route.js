const express = require('express');
const router = express.Router();
const controller = require('../controllers/es_index.controller');

router.route('/')
    .post(controller.create)
    .put(controller.create)
    .delete(controller.delete);
module.exports =  router;