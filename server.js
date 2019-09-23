require("dotenv").config();

const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// bodyParser = require("body-parser") > (NOW THIS BODY PARSER IS INCLUDED WITH EXRPRESS)
// false > enables us to get info from our form with req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

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

// Passport video attempt to make home page route as youtube guide had it
// app.use('/', require('./routes/index'));

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
