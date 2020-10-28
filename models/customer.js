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
    },

    avatar : {
        type : String,
        require : true
    }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;