const express = require('express');
const router = express.Router();
const { usersRouter } = require('../controllers/UserController');
const { shipmentsRouter } = require('../controllers/ShipmentController');

router.use('/users', usersRouter);
router.use('/shipment', shipmentsRouter);

module.exports = {
  router
};
