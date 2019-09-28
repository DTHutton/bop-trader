const db = require("../models");
const passport = require("passport");
var bcrypt = require("bcrypt");
const saltRounds = 1;
// const { ensureAthenticated } = require("../config/auth");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    console.log("app.post( /login  (similar to example /api/login");
    // res.send("hell0 >>>>> HIT POST  / login   for authentication local")
    res.render("dashboard");
  });

  // REGISTER POST user, validate form input, show user partials msg (PARTIAL FLASH MSG NOT WORKING>..)
  app.post("/register", (req, res) => {
    // console.log("== > > POST /register route hit >> req.body = ",req.body);

    // Destructuring req.body to check form was entered correctly
    const { email, emailValidate, password, passwordValidate } = req.body;
    const errors = [];

    // Check required fields >
    if (!email || !emailValidate || !password || !passwordValidate) {
      errors.push({ msg: "Please fill in all fields" });
    }
    // Check emails match
    if (email !== emailValidate) {
      errors.push({ msg: "Emails do not match" });
    }
    // Check passwords match
    if (password !== passwordValidate) {
      errors.push({ msg: "Passwords do not match" });
    }
    // Check pass length < 6
    if (password.length < 6) {
      errors.push({ msg: "Password must be at least 6 characters" });
    }
    if (errors.length > 0) {
      // render the register html again with wrongly entered data so User can correct entry
      console.log("errors = ", errors);
      res.render("register", {
        errors,
        email
        // ,
        // emailValidate,
        // password,
        // passwordValidate
      });
    } else {
      console.log("\n NO FORM ERRORS, Now check if that user already exists\n");

      // res.send("validation pass");

      db.User.findAll({ email, where: { email } }).then(user => {
        // UPDATED THIS to email, where: {email } >>> DOUBLE CHECK THIS
        if (user.length) {
          console.log(
            "\n If user already exists,  re-render the page with erros and pervious entered info \n"
          );
          // User exists
          errors.push({ msg: "Email is already registered" });
          res.render("register", {
            errors,
            email
          });

          console.log(
            "WHY ARE NEW USERS CREATED STILL WHEN THEY HAVE THE SAME NAME"
          );
        } else {
          // BCRYPT
          bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            db.User.create({
              email: req.body.email,
              password: hash
            }).then(function(data) {
              if (data) {
                res.render("login");
              }
              // res.json(user);
            });
          });
          // console.log("\n new user created, user = \n newUser \n ", );
          // res.render("dashboard");
        }
      });
    }
  });
};

// =============== END

// ===============
// ===============
// ===============

// ===============

// ===============

// ===============

// user/login or user/register route

//  BCRYPTTTT

// var bcrypt = require("bcryptjs");
//
// module.exports = {

// bcrypt.genSalt(10, (err, salt) =>
//     bcrypt.hash(newUser.password, salt, (err,hash) => {
//         if(err) throw err;
// Set password to hashed
//         newUser.password = hash;
// Save user
//         newUser.save()
//             .then(user => {
//                 requestAnimationFrame.flash("success_msg", "You are now registered and can log in");
//                 res.redirect("/login");
//         })
//         .catch(err => console.log(err));

//     }))
// }
