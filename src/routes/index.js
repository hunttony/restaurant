const express = require('express');
const router = express.Router();


/*const menuMod = require('./menuMod'); */

require('dotenv').config();

router.get('/', function(req, res) {
  res.render('index', { title: 'Your Restaurant'});
});

router.get('/about', function(req, res) {
  res.render('components/about', { title: 'Your Restaurant | About' });
});

router.get('/contact', function(req, res) {
  res.render('components/contact', { title: 'Your Restaurant | Contact Us' });
});

router.get('/investors', function(req, res) {
  res.render('components/investors', { title: 'Your Restaurant | Investors' });
});

router.get('/order', function(req, res) {
  res.render('components/orders', { title: 'Your Restaurant | Place Your Order' });
});



module.exports = router
