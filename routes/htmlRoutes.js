// const express = require('express');
// const app = express.Router();
// const bcrypt = require('bcryptjs');
// const dbUser = require("../models/user");

const db = require("../models");
const passport = require("passport");
// const { ensureAthenticated } = require("../config/auth");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      // changed index to welcome for now
      console.log("hello");
      res.render("welcome", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // REGISTER TEST PAGE ROUTE/logic
  app.get("/register", function(req, res) {
    res.render("register", {
      msg: "Register on BoP"
    });
    // res.render('register', {
    // 	example: dbExample
    // });
    // res.send("register ger route hit . ")
  });

  app.get("/login", (req, res, next) => {
    passport.authenticate("local", {
      // youtube example, > was giving to many redirects? NEED THIS LATER
      successRedirect: "/dashboard",
      failureRedirect: "/login",
      failureFlash: true
      // from passport docs >> boiler plate
      // if (err) {return next(err);}
      // if (!user) {return res.redirect('/login');}
      // req.logIn(user, function(err) {if (err) {return next(err);}
      // 	return res.redirect('/users/' + user.username);});
    })(req, res, next);
  });

  // app.get('/login', (req,res) => {
  // 	res.render('login', {
  // 		msg: 'Login to Bop Traderz'
  // 	})
  // });

  app.get("/logout", (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/login");
  });

  // DASHBOARD PAGE, protected by auth.js config >  ensureAthenticated,
  // ADD AS parameter when we are done with project
  app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
      name: req.user.name
    });
  });

  // register user, validate form input, show user partials mesG
  app.post("/register", (req, res) => {
    console.log(req.body);
    // res.send('hello, post route was hit A-okay');
    // destructuring req.body
    const { name, email, password, password2 } = req.body;

    const errors = [];

    // Check required fields >
    if (!name || !email || !password || !password2) {
      errors.push({ msg: "Please fill in all fields" });
    }
    // Check passwords match
    if (password !== password2) {
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
        name,
        email,
        password,
        password2
      });
    } else {
      console.log(
        "NO FORM ENTER ERRORS, Now, check if that user already exists\n"
      );
      // res.send("validation pass");
      db.User.findAll({ email: email }).then(user => {
        if (user) {
          console.log(
            "\n then function ... if user already exists,  re-render the page with erros and pervious entered info \n"
          );
          // User exists
          errors.push({ msg: "Email is already registered" });
          res.render("register", {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          console.log("new user created");
          const newUser = new User({
            name,
            email,
            password
          });
          console.log("new user created, user = ", newUser);
          res.render("dashboard");
        }
      });
    }
  });

  // Render 404 page for any unmatched routes
  // -  No set route defined, display default page
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// ===========
// +==========

// Load example page and pass in an example by id
// app.get('/example/:id', function(req, res) {
// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
// 		res.render('example', {
// 			example: dbExample
// 		});
// 	});
// });
