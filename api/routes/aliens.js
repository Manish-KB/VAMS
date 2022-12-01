const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');
const mongoose = require('mongoose');

//Get all Aliens profiles
router.get('', async (req, res) => {
  try {
    const profiles = await Alien.find();
    res.status(200).json({
      message: 'Get all the Aliens Profile',
      profiles: profiles,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error',
    });
  }
});

//Create a new profile
router.post('/createprofile', async (req, res, next) => {
  try {
    const { name, age, native_planet, weight, height, language } = req.body;
    if (
      name.t === '' ||
      age === '' ||
      native_planet === '' ||
      weight === '' ||
      height === '' ||
      language === ''
    ) {
      res.status(300).send({
        message: 'Fields cannot be empty',
      });
      return;
    }
    const existingName = await Alien.findOne({ name: name });
    if (existingName) {
      res.status(300).send({
        message: 'Name Already exists',
      });
      return;
    }
    const newAlien = {
      name: name,
      age: age,
      native_planet: native_planet,
      weight: weight,
      height: height,
      language: language,
    };
    const alien = new Alien(newAlien);
    await alien.save();
    res.status(200).json({
      message: 'Welcome to POST Alien page',
      profile: alien,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Server Error',
    });
  }
});

router.get('/getprofile/:id', (req, res, next) => {
  const id = req.params.id;
  Alien.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.send(500).json(doc);
    })
    .catch(err => console.log(err));
  res.json({
    error: err,
  });
});

router.delete('/deleteprofile/:id', (req, res, next) => {
  const id = req.params.id;
  Alien.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch('/updateprofile/:id', (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[opspopName] = value.value;
  }
  Alien.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
