const express = require('express');
const Detail = require('../models/detail');
const Music = require('../models/music');
const Contact = require('../models/contact');
const About = require('../models/about');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await Detail.findOne({ _id: '64586dc039b778208bbe2726' }).exec();
    const music = await Music.find().exec();
    const about = await About.find().exec();

    res.render('index', {
      result: result,
      music: music,
      about:about,

    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

router.get('/about', async (req, res) => {
  try {
    const result = await Detail.findOne({ "_id": "64586dc039b778208bbe2726" }).exec();
    const about = await About.find().exec();

    res.render('about', {
      result: result,
      about: about[0], // Assuming only one about document is expected
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});


router.post('/process-contact-form', async (req, res) => {
  console.log('This form is submitted');
  console.log(req.body);

  try {
    const data = new Contact(req.body);
    const result = await data.save();
    console.log(result);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

module.exports = router;
