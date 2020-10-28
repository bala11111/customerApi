const express = require("express");
const router = express.Router();
const passport = require("passport");

const customerController = require('../../controllers/api/customer_controller');

//for creating customers information
router.post('/createCustomer',customerController.createCustomer);

//for showing customers information
router.get('/showCustomer/:panNumber',  passport.authenticate('jwt', {session: false}) ,customerController.showCustomer);

module.exports = router;