const express = require('express');
const {Shipment } = require('../models/Shipment');

const router = express.Router();

// localhost:3000/shipments/register
router.post('/register', function(req, res) {
  console.log(req.body);
  let body = req.body;
  const shipment = new Shipment(body);
  shipment
    .save()
    .then(function(shipment) {
      res.send(shipment);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Shipment.find()
    .then(function(shipments) {
      res.send(shipments);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put('/update/:id', function(req, res) {
  const body = req.body;
  const id = req.body.params;
  Shipment.findOneAndUpdate(id, body, { new: true })
    .then(function(shipments) {
      res.send(shipments);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:id', function(req, res) {
  console.log(req.body.params);
  const id = req.body.params;
  Shipment.deleteOne(id)
    .then(function(shipment) {
      res.send(shipment);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  shipmentsRouter: router
};
