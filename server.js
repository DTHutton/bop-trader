/* eslint-disable camelcase */
require("dotenv").config();

const express = require("express");
const exphbs = require("express-handlebars");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// Passport config
require("./config/passport")(passport);

// Middleware
// bodyParser = require("body-parser") > (NOW THIS BODY PARSER IS INCLUDED WITH EXRPRESS)
// FALSE = enables us to get info from our form with req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(__dirname + "public"));
app.use(express.static("public"));

// express-session Middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
    // , cookie: { secure: true }
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars (for text colors .. from youtube vid...) . ( for flash )
// custom middleware for success and error messages while registering/logging in
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.err_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// require("./routes/index")(app);
// require("./routes/users")(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
