const passport = require("passport");
const {User} = require('../models');
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET_KEY ;




passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      
      const user = await User.findOne({ where: {id: jwt_payload.userId } });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        
        
      }
      

    } catch (err) {
      console.log(err)
      return done(err.message, false);
    }
  })
);

const authenticate = passport.authenticate("jwt", { session: false });

module.exports = authenticate;
