// const express = require('express');
// const app = express.Router();
// const bcrypt = require('bcryptjs');
// const dbUser = require("../models/user");
// const passport = require("passport");

const db = require("../models");
const isAuthenticated = require("../config/auth");

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

  // DASHBOARD PAGE, protected by auth.js config >  isAuthenticated,
  app.get("/dashboard", isAuthenticated, function(req, res) {
    console.log("isATH check!  hit GET /dashboard html route");
    res.render("dashboard");
  });

  // REGISTER GET ROUTE/logic
  app.get("/register", function(req, res) {
    res.render("register", {
      msg: "Register on BoP"
    });
  });

  app.get("/login", (req, res) => {
    console.log("HIT /login GET");
    res.render("login");
  });

  app.get("/logout", (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// ===========
// passport.authenticate("local", {
// youtube example, > was giving to many redirects? NEED THIS LATER
// successRedirect: "dashboard",
// failureRedirect: "login"
// ,
// failureFlash: true
// from passport docs >> boiler plate
// if (err) {return next(err);}
// if (!user) {return res.redirect('/login');}
// req.logIn(user, function(err) {if (err) {return next(err);}
// 	return res.redirect('/users/' + user.email);});
// });
// req, res, next;
// ===========

// app.get('/login', (req,res) => {
// 	res.render('login', {
// 		msg: 'Login to Bop Traderz'
// 	})
// });

// +==========
// ADD AS parameter when we are done with project
// app.get("/dashboard", isAuthenticated, (req, res) => {
// app.get("/dashboard", (req, res) => {
// res.send("HIT THE /get (dashboard) > in the htmlRoutes")
//   console.log("hit GET /dashboard html route");
//   res.render("dashboard");
// });

// Load example page and pass in an example by id
// app.get('/example/:id', function(req, res) {
// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
// 		res.render('example', {
// 			example: dbExample
// 		});
// 	});
// });
