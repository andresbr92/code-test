const express = require('express');
const Device = require('../models/devices');
const router = express.Router();

router.post('/device/create', async (req, res) => {
  try {
    let device = new Device(req.body);
    device = await device.save();
    res.status(200).json({
      status: 200,
      data: device
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    });
  }
});

router.get('/device/list', async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json({
      status: 200,
      data: devices
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    });
  }
});

router.get('/device/:deviceId', async (req, res) => {
  try {
    const device = await Device.findOne({
      _id: req.params.deviceId
    });
    if (device) {
      res.status(200).json({
        status: 200,
        data: device
      });
    }
    res.status(400).json({
      status: 400,
      message: 'No post found'
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    });
  }
});

router.put('/device/edit/:deviceId', async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.deviceId, req.body, {
      new: true
    });
    if (device) {
      res.status(200).json({
        status: 200,
        data: device
      });
    }
    res.status(400).json({
      status: 400,
      message: 'No post found'
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    });
  }
});

router.delete('/device/delete/:deviceId', async (req, res) => {
  try {
    const device = await Device.findByIdAndRemove(req.params.deviceId);
    if (device) {
      res.status(200).json({
        status: 200,
        message: 'Post deleted successfully'
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'No post found'
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message
    });
  }
});

module.exports = router;
