// user/login or user/register route

// var bcrypt = require("bcryptjs");
// // 
// module.exports = {

// bcrypt.genSalt(10, (err, salt) => 
//     bcrypt.hash(newUser.password, salt, (err,hash) => {
//         if(err) throw err;
//         // Set password to hashed
//         newUser.password = hash;
//         // Save user
//         newUser.save()
//             .then(user => {
//                 requestAnimationFrame.flash("success_msg", "You are now registered and can log in");
//                 res.redirect("/login");
//         })
//         .catch(err => console.log(err));

//     }))
// }