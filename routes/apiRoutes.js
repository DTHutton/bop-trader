var db = require("../models");
var math = require("../public/js/math");

module.exports = function(app) {
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

  // Create a new user
  app.post("/login", function(req, res) {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(user) {
      if (!user) {
        res.send("no user with that email / username exists");
        // CHANGE TO REDIRECT after it works
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (result === true) {
            console.log("hello > bcrypt result == true");
            res.send("true! change to render dashboard");
          } else {
            res.send("incorrect password , change to render /login page");
          }
        });
      }
    });

    // THIS WORKED BEFORE
    // db.User.create(req.body).then(function(dbUser) {
    //   res.json(dbUser);
    //   res.render("login");
    // });
  });

  // GET FUSION CHARTS
  app.get("/fusioncharts", function(req, res) {
    res.render("fusioncharts");
  });

  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by userId
  app.delete("/api/users/:userId", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.User.destroy({ where: { userId: req.params.userId } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
