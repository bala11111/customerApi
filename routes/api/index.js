const express = require("express");
const router = express.Router();
const passport = require("passport");

const customerController = require('../../controllers/api/customer_controller');

router.post('/createCustomer',customerController.createCustomer);
router.get('/showCustomer/:panNumber',  passport.authenticate('jwt', {session: false}) ,customerController.showCustomer);

module.exports = router;