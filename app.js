const express = require('express');

const indexRoutes = require('./src/routes/index');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(  'public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRoutes);


// application of http server




// Start the server
app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
