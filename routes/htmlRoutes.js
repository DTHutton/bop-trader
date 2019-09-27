// const express = require('express');
// const app = express.Router();
// const bcrypt = require('bcryptjs');
// const dbUser = require("../models/user");

const db = require("../models");
// const passport = require("passport");
// const { ensureAthenticated } = require("../config/auth");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      // changed index to welcome for now
      // console.log("hello");
      res.render("welcome", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // REGISTER GET ROUTE/logic
  app.get("/register", function(req, res) {
    res.render("register", {
      msg: "Register on BoP"
    });
  });

  app.get("/login", (req, res, next) => {
    res.render("login");
    // passport.authenticate("local", {
    // youtube example, > was giving to many redirects? NEED THIS LATER
    // successRedirect: "/dashboard",
    // failureRedirect: "/login",
    // failureFlash: true
    // from passport docs >> boiler plate
    // if (err) {return next(err);}
    // if (!user) {return res.redirect('/login');}
    // req.logIn(user, function(err) {if (err) {return next(err);}
    // 	return res.redirect('/users/' + user.email);});
    // })
    req, res, next;
  });

  app.get("/logout", (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/login");
  });

  // DASHBOARD PAGE, protected by auth.js config >  ensureAthenticated,
  // ADD AS parameter when we are done with project
  app.get("/dashboard", (req, res) => {
    // res.send("HIT THE /get (dashboard) > in the htmlRoutes")
    console.log("hit GET /dashboard html route")
    // res.render("dashboard", {
    //   email: req.body.email
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// ===========
// ===========

// app.get('/login', (req,res) => {
// 	res.render('login', {
// 		msg: 'Login to Bop Traderz'
// 	})
// });

// +==========

// Load example page and pass in an example by id
// app.get('/example/:id', function(req, res) {
// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
// 		res.render('example', {
// 			example: dbExample
// 		});
// 	});
// });
