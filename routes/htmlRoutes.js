// const express = require('express');
// const app = express.Router();
// const bcrypt = require('bcryptjs');
// const dbUser = require("../models/user");
// const passport = require("passport");
// const Authentication = require("../config/passport/passport");

// const db = require("../models");

module.exports = function(app) {
  // Load welcome page
  app.get("/", function(req, res) {
    res.render("welcome");
  });

  // DASHBOARD PAGE, protected by auth.js config >  isAuthenticated,
  // app.get("/dashboard", function(req, res) {
  //   res.render("dashboard");
  // });

  // REGISTER GET ROUTE/logic
  // app.get("/register", function(req, res) {
  //   res.render("register", {
  //     msg: "Register on BoP"
  //   });
  // });

  // app.get("/login", (req, res) => {
  //   res.render("login");
  // });

  app.get("/index", (req, res) => {
    console.log("the req.user", req.user);
    if (req.user) {
      console.log("this got hit");
      var user = {
        id: req.session.passport.user,
        isloggedin: Authentication.isAuthenticated
      };
      return res.render("index", user);
    }
    return res.redirect("/login");
  });

  // app.get("/logout", (req, res) => {
  //   req.logout();
  //   req.flash("success_msg", "You are logged out");
  //   res.redirect("/login");
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
