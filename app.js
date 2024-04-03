const express = require('express');

const indexRoutes = require('./src/routes/index');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(  'public'));

app.set('view engine', 'ejs');

app.use('/', indexRoutes);






// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
