const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    name: {
      type: String
    },
    manufacturer: {
      type: String
    },
    description: {
      type: String
    },
    color: {
      type: String
    },
    price: {
      type: Number
    },
    imageFileName: {
      type: String
    },
    screen: {
      type: String
    },
    proccessor: {
      type: String
    },
    ram: {
      type: Number
    }

  },
  { timestamps: true }
);

const Device = mongoose.model('get', deviceSchema);

module.exports = Device;
