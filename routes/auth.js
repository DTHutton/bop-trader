var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/register", authController.register);

  app.get("/login", authController.login);

  app.post(
    "/register",
    passport.authenticate("local-register", {
      successRedirect: "/dashboard",
      session: true,
      failureRedirect: "/register"
    })
  );

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/login");
  }
};
