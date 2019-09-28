var db = require("../models");
const passport = require("passport");

module.exports = function(app) {
  // GET FUSION CHARTS
  app.get("/api/fusioncharts", passport.authenticate("local"), function(req, res) {
    res.render("fusioncharts");
  });

  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};

// POST route for saving a newUser
// app.post("posts", function(req, res) {
//   console.log("posts  HIT >> req.body = ", req.body);
//   db.User.create({
//     email: req.body.email,
//     password: req.body.password
//   }).then(function(newUser) {
//     res.json(newUser);
//   });
// });
