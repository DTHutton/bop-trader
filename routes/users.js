const db = require("../models");
// const passport = require('passport');
// const { ensureAthenticated } = require("../config/auth");

module.exports = function(app) {
  // REGISTER POST user, validate form input, show user partials msg

  app.post("/register", (req, res) => {
    console.log(
      "USER ROUTES _ POST /register route hit >> req.body = ",
      req.body
    );
    // res.send('hello, post route was hit A-okay');
    // destructuring req.body
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
      console.log(
        "NO FORM ENTER ERRORS, Now, check if that user already exists\n"
      );
      // res.send("validation pass");
      db.User.findAll({ email, where: { email } }).then(user => {
        // UPDATED THIS to email, where: {email }      >>>>>>>>>>>>>>>>>> DOUBLE CHECK THIS
        if (user.length) {
          console.log("user = ", user);
          console.log(
            "\n then function ... if user already exists,  re-render the page with erros and pervious entered info \n"
          );
          // User exists
          errors.push({ msg: "Email is already registered" });
          res.render("register", {
            errors,
            email
          });
        } else {
          //  console.log("new user created");
          const newUser = new db.User({
            email,
            password
          });

          db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
          });
          console.log("\n new user created, user = \n", newUser);
          // res.render("dashboard");
        }
      });
    }
  });
};

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
