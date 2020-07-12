const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Initialitazion
const app = express();

// Settings
app.set('port', 3001);

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
// Routes
app.use(require('./routes/fireRoutes'));

// Start
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});

