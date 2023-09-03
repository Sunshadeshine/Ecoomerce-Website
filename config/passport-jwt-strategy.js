import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJWT } from 'passport-jwt';   //extract jwt from header
const secretKey = process.env.JWT_SECRET_KEY //my key for decypt and encyrpt
const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  //Header is list ok keys 
  secretOrKey: secretKey,
};

const jwtStrategy = new JWTStrategy(jwtOptions,async (jwtPayload, done) => {
  // Here, you can fetch user data from a database based on jwtPayload
  // and call `done` with an error and user object or false if not found.
   try {
        const user = await User.findById(jwtPayload._id);
        
        if(user){
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.log('Error in finding user from JWT');
        return done(err, false);
    }
    });

passport.use(jwtStrategy);
