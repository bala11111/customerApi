const mongoose = require('mongoose');

// linking the DB
const url = process.env.MONGO_URL || 'mongodb://localhost/customerAPI'
mongoose.connect(url);
// getting the connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;