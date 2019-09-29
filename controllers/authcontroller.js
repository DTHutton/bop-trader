exports.register = function(req, res) {
  res.render("register");
};

exports.login = function(req, res) {
  res.render("login");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
