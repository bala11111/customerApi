// require mongoose 
const mongoose = require('mongoose');

// CUSTOMER SCHEMA
const customerSchema = mongoose.Schema({
    firstName: {
        type : String,
        require : true
    },

    panNumber : {
        type : String,
        require : true
    },

    DateOfBirth : {
        type : Date,
        require : true
    },

    Gender : {
        type : String,
        require : true,
        enum : ['Male','Female']
    },

    email : {
        type : String,
        require : true
    }
}, {
    timestamps: true
});

const CUSTOMER = mongoose.model('CUSTOMER', customerSchema);

module.exports = CUSTOMER;