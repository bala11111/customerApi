const express = require('express');
const app = express();

//port number
const port = process.env.PORT || 8000;


const db = require('./config/mongoose');

//middleware
app.use(express.urlencoded());

//for authentication using token
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');

app.use('/', require('./routes'));

//starting our app
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
