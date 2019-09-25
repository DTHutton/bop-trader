const db = require('../models');
// const express = require('express');
// const app = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// const { ensureAthenticated } = require("../config/auth");
// const dbUser = require("../models/user");

// WHY IS name not defined >>

module.exports = function(app) {
	// Load index page
	app.get('/', function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			// changed index to welcome for now

			res.render('welcome', {
				msg: 'Welcome!',
				examples: dbExamples
			});
		});
	});

	// REGISTER TEST PAGE ROUTE/logic
	app.get('/register', function(req, res) {
		res.render('register', {
			msg: 'Register on BoP'
		});

		// res.render('register', {
		// 	example: dbExample
		// });
		// res.send("register ger route hit . ")
	});

	app.get('/login', (req,res) => {
		res.render('login', {
			msg: 'Login to Bop Traderz'
		})
	});

	// CHANGE BACK TO THIS LOGIN ROUTE ONCE AUTHENTICATION FOR PASSPORT WORKS!~!@!@!@~
	// app.get('/login', (req, res, next) => {
	// 	passport.authenticate('local',{
	// 			// youtube example, > was giving to many redirects? NEED THIS LATER
	// 			successRedirect: "/dashboard",
	// 			failureRedirect: "/login",
	// 			failureFlash: true
	// 			// from passport docs >> boiler plate
	// 			// if (err) {return next(err);}
	// 			// if (!user) {return res.redirect('/login');}
	// 			// req.logIn(user, function(err) {if (err) {return next(err);}
	// 			// 	return res.redirect('/users/' + user.username);});
	// 		}
	// 	)(req, res, next);
	// });

	app.get('/logout', (req, res) => {
		req.logout();
		req.flash('success_msg', 'You are logged out');
		res.redirect('/login');
	});

	// DASHBOARD PAGE, protected by auth.js config >  ensureAthenticated,  add as parameter when we are done with project
	// ensureAuthenticated (REMOVE THIS PARAM IF GIVING ISSUES WHILE TESTING)
	// no arrow function here..?
	app.get('/dashboard', (req, res) => {
		res.render('dashboard', {
			name: req.user.name
		});
	});

	// register user, validate form input, show user partials messG
	app.post('/register', (req, res) => {
		console.log(req.body);
		// res.send('hello, post route was hit A-okay');
		// destructuring req.body
		const { name, email, password, password2 } = req.body

		let errors = [];

		// Check required fields >
		if(!name || !email || !password || !password2){
			errors.push({msg: "Please fill in all fields"})
		}
		// Check passwords match
		if(password !== password2) {
			errors.push({msg: "Passwords do not match"})
		}
		// Check pass length < 6
		if(password.length < 6) {
			errors.push({msg: "Password must be at least 6 characters"})
		}
		if(errors.length > 0) {
			// render the register html again with wrongly entered data so User can correct entry
			console.log("errors = ", errors)
			res.render("register", {
				errors,
				name,
				email,
				password,
				password2
			});
		} else {
			// res.send("validation pass");
			db.User.findAll({ email: email})
			.then( user => {
				if(user) {
					// User exists
					errors.push({ msg: "Email is already registered" })
					res.render("register", {
						errors,
						name,
						email,
						password,
						password2
					});
				} else {
					const newUser = new User({
						name,
						email,
						password
					});
					console.log("new user created");
					// res.send("hello");
				}
			})

		}

	});

	// Load example page and pass in an example by id
	// app.get('/example/:id', function(req, res) {
	// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
	// 		res.render('example', {
	// 			example: dbExample
	// 		});
	// 	});
	// });

	// Render 404 page for any unmatched routes
	// -  No set route defined, display default page
	app.get('*', function(req, res) {
		res.render('404');
	});
};
