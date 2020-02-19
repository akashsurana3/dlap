const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
// console.log(Schema);
const shipmentSchema = new Schema({
  bookingId: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  cargo: {
    type: String
  },
  product: {
    type: String
  },
  containerQuantity: {
    type: String
  },
  containerType: {
    type: String
  },
  containerTemperature: {
    type: String
  },

  termCondition: {
    type: String
  },
  internalReference: {
    type: String
  },
  customer: {
    type: String
    // required: true,
  },
  cha: {
    type: String
    // required: true,
  },
  ff: {
    type: String
    // required: true,
  },
  type: {
    type: String
    // required: true,
  },
  incoterm: {
    type: String
    // required: true,
  },
  pickDrop: {
    type: String
    // required: true,
  },
  originCountry: {
    type: String
    // required: true,
  },
  destinationCountry: {
    type: String
    // required: true,
  },
  stuffingLocation: {
    type: String
    // required: true,
  },
  deStuffingLocation: {
    type: String
    // required: true,
  },
  originServices: {
    type: String
    // required: true,
  },
  destinationServices: {
    type: String
    // required: true,
  },
  weight: {
    type: String
    // required: true,
  },
  shippingLine: {
    type: String
    // required: true,
  }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = {
  Shipment
};
