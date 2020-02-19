const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;
// console.log(Schema);
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return validator.isEmail(value);
          },
          message: function () {
            return 'Invalid email format'
          }
        }
      },
    password: {
        type: [String],
        required: true,
        default: ['qwertyuiop']
    },

    role: {
        type: String,
        required:true,
    },
    containerTracking: {
        type: Boolean,
        default: true
    },
    editShipipments: {
        type: Boolean,
        default: true
    },
    deleteShipments: {
        type: Boolean,
        default: true
    },
    accessShipments: {
        type: Boolean,
        default: true
    },
    inquiry: {
        type: Boolean,
        default: true
    },
    allAction: {
        type: Boolean,
        default: true
    },
    includeMail: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}
