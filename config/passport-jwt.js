const passport = require('passport');

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Customer = require('../models/customer');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'customerapi'
}

// authenticate using passport-jwt
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
    
    Customer.findById(jwtPayLoad._id, function(err, customer){
        if(err){console.log('Error in finding Customer'); return;}

        if(customer){
            return done(null, customer);
        } else{
            return done(null, false);
        }
    })

}));

module.exports = passport;