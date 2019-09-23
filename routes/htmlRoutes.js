const db = require('../models');

module.exports = function(app) {
	// Load index page
	app.get('/', function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.render('index', {
				msg: 'Welcome!',
				examples: dbExamples
			});
		});
	});

	// REGISTER TEST PAGE ROUTE/logic
	app.get('/register', function(req, res) {
      res.render('register', {
        msg: "Register on BoP"
      });
    
      // res.render('register', {
			// 	example: dbExample
      // });
      // res.send("register ger route hit . ")
  });
  
  // test
  app.post('/register', (req,res) => {
    console.log(req.body);
    res.send("hello");
  })

	// Load example page and pass in an example by id
	app.get('/example/:id', function(req, res) {
		db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
			res.render('example', {
				example: dbExample
			});
		});
	});

	// Render 404 page for any unmatched routes
	app.get('*', function(req, res) {
		res.render('404');
		// -  No set route defined, display default page
	});
};
