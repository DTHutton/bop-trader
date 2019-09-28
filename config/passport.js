const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

// Load User Model
var User = require("../models/user");

console.log("hit passport.js file");

passport.use(
  new LocalStrategy(
    {
      email: "email"
    },
    (email, password, done) => {
      // When a user tries to sign in this code runs
      // Match user (check if user already has an email registered)
      User.findOne({
        where: {
          email: email
        }
        // email: email >>> I changed ^ like example.
      }).then(user => {
        // if no email match, return done
        if (!user) {
          return done(null, false, {
            message: "That email is not regisetered"
          });
        } else if (!user.validPassword(password)) {
          // USE THIS FIRST< THEN DO BCRYPTTTT
          // If there is a user with the given email, but the password the user gives us is incorrect
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, user);
      });
      // .catch((err) => console.log(err));
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user

passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log(". . >> passport.serializeUser HIT");
  // example only returned user. not user.id
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    console.log(". . >> passport.serializeUser HIT");
    done(err, user);
  });
});

module.exports = passport;

// If there is a user with given email, check the password

// Match password user submits, check againt Database stored hash to see if it matches
// bcrypt.compare(password, user.password, (err, isMatch) => {
//   if (err) {
//     throw err;
//   }

//   if (isMatch) {
//     console.log(
//       "\n account verified - set the user with done function..\n"
//     );
//     console.log("time to work on bcrypt..");
//     return done(null, user);
//   } else {
//     return done(null, false, {
//       message: "Password incorrect"
//     });
//   }
// if none of the above should i return the user? >>  or is that the catch.
// return done(null, user);
// });
// END BCRYPT
