const express = require('express');

const indexRoutes = require('./src/routes/index');

const http = require('http');
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.static(  'public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', indexRoutes);

http

// application of http server




// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
