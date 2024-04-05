const express = require('express');

const http = require('http');
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const router = express.Router();

app.use(express.static(  'public'));

app.set('views', './');
app.set('view engine', 'ejs');

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


// application of http server




// Start the server
server.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
