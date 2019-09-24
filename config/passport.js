const LocalStrategy = require("passport-local").Strategy;

// NEED TO SET THIS UP WITH DB AND SEQUILZE  >> >> >> >> FOR USER
// const mongoose = require("mongoose"); in example...
const sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

// Load User Model
const User = require("../models/user");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            // Match user (check if user already has an email registered)
            User.findOne({ email: email})
                .then(user => {
                    // if no email match, return done
                    if(!user) {
                        return done(null, false, { message: "That email is not regisetered"});
                    }
                    
                    // Match password user submits, check againt Database stored hash to see if it matches
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;
                        
                        if(isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Password incorrect"});
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}

