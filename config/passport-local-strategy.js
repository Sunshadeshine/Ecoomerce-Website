import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userModel from '../models/userModel.js';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await userModel.findOne({ email });

        if (!user || user.password !== password) {
        //   req.flash('error', 'Invalid Username/password');
          console.log('Invalid Username/password');
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        // req.flash('error', 'Error in finding user');
        console.log('Error in finding user -->passport');
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id).exec();
    if (!user) {
      console.log('User not found');
    //   req.flash('User not found');
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    console.log('Error in finding user -->passport');
    // req.flash('error', 'Error in finding user');
    return done(err);
  }
});

// Check if the user is authenticated
passport.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  // If the user is not signed in
  return res.redirect('/users/signin');
};

// Set authenticated user in locals
passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.user contains the current signed-in user from the session cookie
    // We are sending this to the locals to make it available in views
    res.locals.user = req.user;
  }

  next();
};

export default passport;
